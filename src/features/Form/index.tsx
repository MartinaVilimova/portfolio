import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button/styled'
import { Form, FormInput, FormLabel, FormTextArea } from './styled'

type DataForm = {
	name: string
	email: string
	subject: string
	message?: string
}

const ContactForm: React.FC = () => {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = (data: DataForm) => console.log(data)

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			{/* ---------NAME------------*/}
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
			{errors.name && <p>{errors.name.message}</p>}

			{/* ---------EMAIL------------*/}
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
			{errors.email && <p>{errors.email.message}</p>}

			{/* ---------SUBJECT------------*/}
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
			{errors.subject && <p>{errors.subject.message}</p>}

			{/* ---------MESSAGE------------*/}
			<FormLabel htmlFor="message">Zpráva</FormLabel>
			<FormTextArea
				id="message"
				name="message"
				placeholder="Napište mi důvod Vašeho spojení ..."
				ref={register}
			/>

			{/* ---------BUTTON------------*/}
			<Button type="submit">ODESLAT</Button>
		</Form>
	)
}

export default ContactForm
