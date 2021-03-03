import React from 'react'
import ContentColumns, {
	NumberColumns,
	NumberColumnsIpad,
} from '../components/ContentColumns'
import ContentWrapper from '../components/ContentWrapper'
import ProfilePhoto from '../components/ProfilePhoto'
import IntroText from '../features/IntroText'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Home: React.FC = () => {
	return (
		<>
			<NavBar />
			<ContentWrapper>
				<ContentColumns
					columns={NumberColumns.Columns2}
					columnsIpad={NumberColumnsIpad.Columus1}
				>
					<IntroText />
					<ProfilePhoto />
				</ContentColumns>
			</ContentWrapper>
			<SettingsBox />
			<SocialIcons />
			<Languages />
		</>
	)
}

export default Home
