import React from 'react'
import ContentWrapper, { UnitsData } from '../components/ContentWrapper'
import Title from '../components/Title'
import ButtonScrollTop from '../features/ButtonScrollTop'
import KnowledgeContent from '../features/KnowledgeContent'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Knowledge: React.FC = () => (
	<>
		<NavBar />
		<ContentWrapper units={UnitsData.LargePage}>
			<Title bigTitle="Znalosti" smallTitle="Znalosti" />
			<KnowledgeContent />
		</ContentWrapper>
		<SettingsBox />
		<SocialIcons />
		<ButtonScrollTop />
		<Languages />
	</>
)

export default Knowledge
