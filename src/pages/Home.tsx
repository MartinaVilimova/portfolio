import React from 'react'
import Columns, { NumberColumns } from 'components/Columns'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import PhotoHome from 'components/PhotoHome'
import IntroText from 'contentPage/Home'
import NavBar from 'features/NavBar'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'

const Home: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.SmallPage}>
			<Columns
				columns={NumberColumns.Columns2}
				columnsIpad={NumberColumns.Columns1}
			>
				<IntroText />
				<PhotoHome />
			</Columns>
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
	</>
)

export default Home
