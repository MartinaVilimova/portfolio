import React from 'react'
import Columns, { NumberColumns } from '../components/Columns'
import PageWrapper, { UnitsData } from '../components/PageWrapper'
import Title from '../components/Title'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const MyWork: React.FC = () => (
	<>
		<NavBar />
		<PageWrapper units={UnitsData.SmallPage}>
			<Title bigTitle="Má práce" smallTitle="Má práce" />
			<Columns
				columns={NumberColumns.Columns3}
				columnsIpad={NumberColumns.Columns1}
			></Columns>
		</PageWrapper>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default MyWork
