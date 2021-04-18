import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import { firestore } from 'services/firebase'
import emailjs from 'emailjs-com'
import { Button } from 'components/Button/styled'
import { useThemeControl } from 'features/Theme'
import { Theme } from 'themes'
import {
	Form,
	FormItem,
	FormInput,
	FormLabel,
	FormTextArea,
	ErrorMessageTop,
	DisplayCaptcha,
	ErrorMessageLeftTop,
} from './styled'

type DataForm = {
	name: string
	email: string
	subject: string
	message: string
}

const saveMessageToDB = async (data: DataForm) => {
	try {
		await firestore
			.collection('messages')
			.add({ ...data, timeStamp: Date.now() })
	} catch (error) {
		console.error(
			'Firestore failed to post message. Error from firebase:',
			error
		)
	}
}

const sendMessageToEmail = async (data: DataForm) => {
	// TODO: create config for all
	try {
		emailjs.send(
			process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
			process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
			{
				from_name: data.email,
				message: data.message,
				subject: data.subject,
			},
			process.env.REACT_APP_EMAILJS_USER_ID || ''
		)
	} catch (error) {
		console.error(
			'Emailjs failed to send message. Error from emailjs:',
			error
		)
	}
}

const ContactForm: React.FC = () => {
	const { register, handleSubmit, errors, reset } = useForm()
	const [isRobot, setIsRobot] = useState(true)
	const [open, setOpen] = useState(false)

	const { theme } = useThemeControl()
	const [actualTheme] = theme
	const history = useHistory()

	const onChange = (token: string | null) =>
		token ? setIsRobot(false) : setIsRobot(true)

	const onSubmit = async (data: DataForm) => {
		//await Promise.all([saveMessageToDB(data), sendMessageToEmail(data)])
		if (isRobot) {
			setOpen(true)
			return
		}

		setOpen(false)
		reset()
		history.push('/successfully-sent')
	}

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			{/* ---------NAME------------*/}
			<FormItem>
				<FormLabel htmlFor="name">Jméno *</FormLabel>
				<FormInput
					id="name"
					name="name"
					type="text"
					placeholder="Jan Novák"
					ref={register({
						required: 'Prosím, zadejte své jméno.',
						pattern: {
							value: /^[a-zA-Zá-žÁ-Ž\s]+$/i,
							message: 'Používejte pouze písmena.',
						},
						maxLength: {
							value: 30,
							message: 'Vaše jméno je příliš dlouhé.',
						},
						minLength: {
							value: 3,
							message: 'Vaše jméno je příliš krátké.',
						},
					})}
				/>
				{errors.name && (
					<ErrorMessageTop>{errors.name.message}</ErrorMessageTop>
				)}
			</FormItem>

			{/* ---------EMAIL------------*/}
			<FormItem>
				<FormLabel htmlFor="email">Email *</FormLabel>
				<FormInput
					id="email"
					name="email"
					type="email"
					placeholder="jan.novak@seznam.cz"
					ref={register({
						required: 'Prosím, zadejte svůj email.',
						pattern: {
							value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Neplatný formát e-mailové adresy.',
						},
						maxLength: {
							value: 254,
							message: 'Váš e-mail má více než 254 znaků.',
						},
					})}
				/>
				{errors.email && (
					<ErrorMessageTop>{errors.email.message}</ErrorMessageTop>
				)}
			</FormItem>

			{/* ---------SUBJECT------------*/}
			<FormItem>
				<FormLabel htmlFor="subject">Předmět *</FormLabel>
				<FormInput
					id="subject"
					name="subject"
					type="text"
					placeholder="Sháním programátora"
					ref={register({
						required: 'Prosím, zadejte předmět Vaší zprávy',
						pattern: {
							value: /^[a-zA-Zá-žÁ-Ž\s]+$/i,
							message: 'V textu se nachází nepodporovaný symbol.',
						},
						maxLength: {
							value: 80,
							message: 'Váš předmět je zbytečně dlouhý.',
						},
						minLength: {
							value: 3,
							message: 'Váš předmět je příliš krátký.',
						},
					})}
				/>
				{errors.subject && (
					<ErrorMessageTop>{errors.subject.message}</ErrorMessageTop>
				)}
			</FormItem>

			{/* ---------MESSAGE------------*/}
			<FormItem>
				<FormLabel htmlFor="message">Zpráva</FormLabel>
				<FormTextArea
					id="message"
					name="message"
					placeholder="Napište mi důvod Vašeho spojení ..."
					ref={register}
				/>
			</FormItem>

			{/* TODO: Verify that it works well without token callback */}
			<DisplayCaptcha open={open}>
				<ReCAPTCHA
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || ''}
					onChange={onChange}
					theme={actualTheme === Theme.Dark ? 'dark' : 'light'}
				/>
				<ErrorMessageLeftTop>
					Prosím potvrďte, že nejste robot.
				</ErrorMessageLeftTop>
			</DisplayCaptcha>

			{/* ---------BUTTON------------*/}
			<Button type="submit">ODESLAT</Button>
		</Form>
	)
}

export default ContactForm
