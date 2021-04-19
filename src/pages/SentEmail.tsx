import React from 'react'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import SentEmail from 'contentPage/SuccessSent'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import NavBar from 'features/NavBar'

const SuccessfullySent: React.FC = () => (
	<>
		<NavBar />
		<WrapperPages units={UnitsData.SmallPage}>
			<SentEmail />
		</WrapperPages>
		<SettingsBox />
		<SocialIcons />
	</>
)

export default SuccessfullySent
