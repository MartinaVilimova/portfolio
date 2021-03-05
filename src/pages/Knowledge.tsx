import React from 'react'
import WrapperPages, { UnitsData } from '../components/WrapperPages'
import Title from '../components/Title'
import ButtonScrollTop from '../features/ButtonScrollTop'
import KnowledgeContent from '../contentPage/Knowledge'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Knowledge: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.LargePage}>
			<Title bigTitle="Znalosti" smallTitle="Znalosti" />
			<KnowledgeContent />
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
		<ButtonScrollTop />
		<Languages />
	</>
)

export default Knowledge
