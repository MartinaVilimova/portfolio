import React from 'react'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import KnowledgeContent from 'contentPage/Knowledge'
import Title from 'components/Title'
import ButtonScrollTop from 'features/ButtonScrollTop'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import Languages from 'features/Languages'
import NavBar from 'features/NavBar'

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
