import React from 'react'
import ContentColumns, { NumberColumns } from '../components/ContentColumns'
import ContentWrapper, { UnitsData } from '../components/ContentWrapper'
import Title from '../components/Title'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import ResumeContent from '../features/ResumeContent'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Resume: React.FC = () => (
	<>
		<NavBar />
		<ContentWrapper units={UnitsData.SmallPage}>
			<Title bigTitle="Životopis" smallTitle="Životopis" />
			<ContentColumns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns1}
			>
				<ResumeContent />
			</ContentColumns>
		</ContentWrapper>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default Resume
