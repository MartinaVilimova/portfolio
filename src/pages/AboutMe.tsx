import React from 'react'
import ContentColumns, { NumberColumns } from '../components/ContentColumns'
import ContentWrapper, { UnitsData } from '../components/ContentWrapper'
import Picture from '../components/Picture'
import Title from '../components/Title'
import AboutMeText from '../features/AboutMeText'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const AboutMe: React.FC = () => (
	<>
		<NavBar />
		<ContentWrapper units={UnitsData.SmallPage}>
			<Title bigTitle="O mně" smallTitle="O mně" />
			<ContentColumns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns1}
			>
				<Picture />
				<AboutMeText />
			</ContentColumns>
		</ContentWrapper>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default AboutMe
