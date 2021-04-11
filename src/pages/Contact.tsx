import React from 'react'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import SocialLinks from 'components/SocialLinks'
import Copyright from 'components/Copyright'
import Title from 'components/Title'
import ButtonScrollTop from 'features/ButtonScrollTop'
import SettingsBox from 'features/Settings'
import ContactForm from 'features/Form'
import Languages from 'features/Languages'
import NavBar from 'features/NavBar'

const Contact: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.LargePage}>
			<Title bigTitle="Kontakt" smallTitle="Kontakt" />
			<SocialLinks />
			<ContactForm />
			<Copyright />
		</WrapperPages>
		<SettingsBox />
		<ButtonScrollTop />
		<Languages />
	</>
)

export default Contact
