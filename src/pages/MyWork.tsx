import React from 'react'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import ContentMyWork from 'contentPage/MyWork'
import Title from 'components/Title'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import Languages from 'features/Languages'
import NavBar from 'features/NavBar'

const MyWork: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.LargePage}>
			<Title bigTitle="Má práce" smallTitle="Má práce" />
			<ContentMyWork />
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default MyWork
