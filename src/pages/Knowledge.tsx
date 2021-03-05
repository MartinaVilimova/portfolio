import React from 'react'
import PageWrapper, { UnitsData } from '../components/PageWrapper'
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
		<PageWrapper units={UnitsData.LargePage}>
			<Title bigTitle="Znalosti" smallTitle="Znalosti" />
			<KnowledgeContent />
		</PageWrapper>
		<SettingsBox />
		<SocialIcons />
		<ButtonScrollTop />
		<Languages />
	</>
)

export default Knowledge
