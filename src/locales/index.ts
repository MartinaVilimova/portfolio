import i18 from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './translations'

export enum AvailableLanguages {
	EN = 'en',
	CS = 'cs',
}

export const defaultLanguage = AvailableLanguages.CS

i18.use(initReactI18next).init({
	lng: defaultLanguage,
	fallbackLng: AvailableLanguages.EN,
	resources,
	interpolation: {
		escapeValue: false,
	},
})

export default i18
