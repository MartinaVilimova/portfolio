import React from 'react'
import Columns, { NumberColumns } from '../components/Columns'
import PageWrapper, { UnitsData } from '../components/PageWrapper'
import Title from '../components/Title'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import ResumeContent from '../contentPage/Resume'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Resume: React.FC = () => (
	<>
		<NavBar />
		<PageWrapper units={UnitsData.SmallPage}>
			<Title bigTitle="Životopis" smallTitle="Životopis" />
			<Columns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns1}
			>
				<ResumeContent />
			</Columns>
		</PageWrapper>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default Resume
