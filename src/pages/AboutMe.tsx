import React from 'react'
import ContentColumns, { NumberColumns } from '../components/ContentColumns'
import ContentWrapper from '../components/ContentWrapper'
import Picture from '../components/Picture'
import Title from '../components/Title'
import AboutMeText from '../features/AboutMetext'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const AboutMe: React.FC = () => {
	return (
		<>
			<NavBar />
			<ContentWrapper>
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
}

export default AboutMe
