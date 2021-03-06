import React from 'react'
import WrapperPages, { UnitsData } from '../components/WrapperPages'
import Title from '../components/Title'
import ButtonScrollTop from '../features/ButtonScrollTop'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Contact: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.SmallPage}>
			<Title bigTitle="Kontakt" smallTitle="Kontakt" />
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
		<ButtonScrollTop />
		<Languages />
	</>
)

export default Contact
