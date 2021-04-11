import React from 'react'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import ErrorInfo from 'contentPage/Error'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import Languages from 'features/Languages'
import NavBar from 'features/NavBar'

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
