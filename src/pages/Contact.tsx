import React from 'react'
import WrapperPages, { UnitsData } from '../components/WrapperPages'
import Title from '../components/Title'
import ButtonScrollTop from '../features/ButtonScrollTop'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import ContactForm from '../features/Form'
import SocialLinks from '../components/SocialLinks'
import Copyright from '../components/Copyright'

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
