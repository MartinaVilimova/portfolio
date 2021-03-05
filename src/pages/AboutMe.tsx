import React from 'react'
import Columns, { NumberColumns } from '../components/Columns'
import PageWrapper, { UnitsData } from '../components/PageWrapper'
import Picture from '../components/Picture'
import Title from '../components/Title'
import AboutMeText from '../contentPage/AboutMe'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const AboutMe: React.FC = () => (
	<>
		<NavBar />
		<PageWrapper units={UnitsData.SmallPage}>
			<Title bigTitle="O mně" smallTitle="O mně" />
			<Columns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns1}
			>
				<Picture />
				<AboutMeText />
			</Columns>
		</PageWrapper>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default AboutMe
