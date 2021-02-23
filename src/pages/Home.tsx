import React from 'react'
import Toggle from '../components/Toggle'
import { Theme, useThemeControl } from '../features/Theme'

const Home: React.FC = () => {
	const [theme, setTheme] = useThemeControl()

	return (
		<>
			<h1>START</h1>
			<Toggle
				isChecked={theme === Theme.Dark}
				onChange={(checked) =>
					setTheme(checked ? Theme.Dark : Theme.Light)
				}
			/>
		</>
	)
}

export default Home
