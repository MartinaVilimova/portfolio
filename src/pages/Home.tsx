import React from 'react'
import Photo from '../components/Photo'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const Home: React.FC = () => {
	return (
		<>
			<NavBar />
			<Photo />
			<SettingsBox />
			<SocialIcons />
		</>
	)
}

export default Home
