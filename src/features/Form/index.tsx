import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { useForm } from 'react-hook-form'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button } from 'components/Button/styled'
import { useThemeControl } from 'features/Theme'
import { Theme } from 'themes'
import { DataForm, saveMessageToDB, sendMessageToEmail } from './data'
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

const ContactForm: React.FC = () => {
	const { register, handleSubmit, errors, reset } = useForm()
	const [isRobot, setIsRobot] = useState(true)
	const [open, setOpen] = useState(false)

	const { theme } = useThemeControl()
	const [actualTheme] = theme
	const history = useHistory()

	const { t } = useTranslation()

	const nameErrorRequired = t('contact.nameErrorRequired')
	const emailErrorRequired = t('contact.emailErrorRequired')
	const subjectErrorRequired = t('contact.subjectErrorRequired')
	const messageErrorRequired = t('contact.messageErrorRequired')

	const onChange = (token: string | null) =>
		token ? setIsRobot(false) : setIsRobot(true)

	const onSubmit = async (data: DataForm) => {
		await Promise.all([saveMessageToDB(data), sendMessageToEmail(data)])
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
				<FormLabel htmlFor="name">{t('contact.name')}</FormLabel>
				<FormInput
					id="name"
					name="name"
					type="text"
					placeholder="Jan Novák"
					ref={register({
						required: nameErrorRequired,
						pattern: {
							value: /^[a-zA-Zá-žÁ-Ž\s]+$/i,
							message: t('contact.nameErrorPattern'),
						},
						maxLength: {
							value: 30,
							message: t('contact.nameErrorMax'),
						},
						minLength: {
							value: 3,
							message: t('contact.nameErrorMin'),
						},
					})}
				/>
				{errors.name && (
					<ErrorMessageTop>{errors.name.message}</ErrorMessageTop>
				)}
			</FormItem>

			{/* ---------EMAIL------------*/}
			<FormItem>
				<FormLabel htmlFor="email">{t('contact.email')}</FormLabel>
				<FormInput
					id="email"
					name="email"
					type="email"
					placeholder="jan.novak@gmail.com"
					ref={register({
						required: emailErrorRequired,
						pattern: {
							value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: t('contact.emailErrorPattern'),
						},
						maxLength: {
							value: 254,
							message: t('contact.emailErrorMax'),
						},
					})}
				/>
				{errors.email && (
					<ErrorMessageTop>{errors.email.message}</ErrorMessageTop>
				)}
			</FormItem>

			{/* ---------SUBJECT------------
			TODO: Subject pattern? add special symbol like - / ?
			*/}
			<FormItem>
				<FormLabel htmlFor="subject">{t('contact.subject')}</FormLabel>
				<FormInput
					id="subject"
					name="subject"
					type="text"
					placeholder={t('contact.subjectPlaceholder')}
					ref={register({
						required: subjectErrorRequired,
						pattern: {
							value: /^[a-zA-Zá-žÁ-Ž\s]+$/i,
							message: t('contact.subjectErrorPattern'),
						},
						maxLength: {
							value: 80,
							message: t('contact.subjectErrorMax'),
						},
						minLength: {
							value: 3,
							message: t('contact.subjectErrorMin'),
						},
					})}
				/>
				{errors.subject && (
					<ErrorMessageTop>{errors.subject.message}</ErrorMessageTop>
				)}
			</FormItem>

			{/* ---------MESSAGE------------*/}
			<FormItem>
				<FormLabel htmlFor="message">{t('contact.message')}</FormLabel>
				<FormTextArea
					id="message"
					name="message"
					placeholder={t('contact.messagePlaceholder')}
					ref={register({
						required: messageErrorRequired,
					})}
				/>
				{errors.message && (
					<ErrorMessageTop>{errors.message.message}</ErrorMessageTop>
				)}
			</FormItem>

			{/* TODO: Verify that it works well without token callback */}
			<DisplayCaptcha open={open}>
				<ReCAPTCHA
					sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || ''}
					onChange={onChange}
					theme={actualTheme === Theme.Dark ? 'dark' : 'light'}
				/>
				<ErrorMessageLeftTop>
					{t('contact.captchaErrorRequired')}
				</ErrorMessageLeftTop>
			</DisplayCaptcha>

			{/* ---------BUTTON------------*/}
			<Button type="submit">{t('contact.submit')}</Button>
		</Form>
	)
}

export default ContactForm
