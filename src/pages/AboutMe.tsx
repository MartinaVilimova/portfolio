import React from 'react'
import Columns, { NumberColumns } from 'components/Columns'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import PhotoAboutMe from 'components/PhotoAboutMe'
import Title from 'components/Title'
import AboutMeText from 'contentPage/AboutMe'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import Languages from 'features/Languages'
import NavBar from 'features/NavBar'

const AboutMe: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.SmallPage}>
			<Title bigTitle="O mně" smallTitle="O mně" />
			<Columns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns1}
			>
				<PhotoAboutMe />
				<AboutMeText />
			</Columns>
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default AboutMe
