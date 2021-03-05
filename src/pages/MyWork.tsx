import React from 'react'
import WrapperPages, { UnitsData } from '../components/WrapperPages'
import Title from '../components/Title'
import ContentMyWork from '../contentPage/MyWork'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const MyWork: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.SmallPage}>
			<Title bigTitle="Má práce" smallTitle="Má práce" />
			<ContentMyWork />
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default MyWork
