import React from 'react'
import Photo from '../components/Photo'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'

const Home: React.FC = () => {
	return (
		<>
			<NavBar />
			<Photo />
			<SettingsBox />
		</>
	)
}

export default Home
