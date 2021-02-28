import React from 'react'
import Content2Columns from '../components/Content2Columns'
import ContentWrapper from '../components/ContentWrapper'
import Photo from '../components/Photo'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Home: React.FC = () => {
	return (
		<>
			<NavBar />
			<ContentWrapper>
				<Content2Columns>
					<Photo />
				</Content2Columns>
			</ContentWrapper>
			<SettingsBox />
			<SocialIcons />
		</>
	)
}

export default Home
