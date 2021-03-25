import React from 'react'
import WrapperPages, { UnitsData } from '../components/WrapperPages'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'
import ErrorInfo from '../contentPage/Error'

const FindError: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.SmallPage}>
			<ErrorInfo />
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
		<Languages />
	</>
)

export default FindError
