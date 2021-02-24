import React from 'react'
import Photo from '../components/Photo'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'

const Home: React.FC = () => {

	return (
		<>
			<NavBar />
			<h1>START</h1>
			<Photo />
			<SettingsBox />
		</>
	)
}

export default Home
