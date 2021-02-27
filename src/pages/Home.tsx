import React from 'react'
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
				<Photo />
			</ContentWrapper>
			<SettingsBox />
			<SocialIcons />
		</>
	)
}

export default Home
