import React from 'react'
import NavBar from '../features/NavBar'
import Photo from '../components/Photo'
import Toggle from '../components/Toggle'
import { Theme, useThemeControl } from '../features/Theme'

const Home: React.FC = () => {
	const [theme, setTheme] = useThemeControl()

	return (
		<>
			<NavBar />
			<Toggle
				isChecked={theme === Theme.Dark}
				onChange={(checked) =>
					setTheme(checked ? Theme.Dark : Theme.Light)
				}
			/>
			<Photo />
		</>
	)
}

export default Home
