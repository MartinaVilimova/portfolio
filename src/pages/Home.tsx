import React from 'react'
import Columns, { NumberColumns } from '../components/Columns'
import PageWrapper, { UnitsData } from '../components/PageWrapper'
import ProfilePhoto from '../components/ProfilePhoto'
import IntroText from '../contentPage/Home'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Home: React.FC = () => (
	<>
		<NavBar />
		<PageWrapper units={UnitsData.SmallPage}>
			<Columns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns1}
			>
				<IntroText />
				<ProfilePhoto />
			</Columns>
		</PageWrapper>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default Home
