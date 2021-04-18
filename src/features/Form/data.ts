import emailjs from 'emailjs-com'
import { firestore } from 'services/firebase'

export type DataForm = {
	name: string
	email: string
	subject: string
	message: string
}

export const saveMessageToDB = async (data: DataForm): Promise<void> => {
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

export const sendMessageToEmail = async (data: DataForm): Promise<void> => {
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
