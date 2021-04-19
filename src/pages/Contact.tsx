import React from 'react'
import { useTranslation } from 'react-i18next'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import SocialLinks from 'components/SocialLinks'
import Copyright from 'components/Copyright'
import Title from 'components/Title'
import ButtonScrollTop from 'features/ButtonScrollTop'
import SettingsBox from 'features/Settings'
import ContactForm from 'features/Form'
import NavBar from 'features/NavBar'

const Contact: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<NavBar />
			<WrapperPages units={UnitsData.LargePage}>
				<Title
					bigTitle={t('menu.contact')}
					smallTitle={t('menu.contact')}
				/>
				<SocialLinks />
				<ContactForm />
				<Copyright />
			</WrapperPages>
			<SettingsBox />
			<ButtonScrollTop />
		</>
	)
}

export default Contact
