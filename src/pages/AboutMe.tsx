import React from 'react'
import Content2Columns from '../components/Content2Columns'
import ContentWrapper from '../components/ContentWrapper'
import Picture from '../components/Picture'
import Title from '../components/Title'
import Languages from '../features/Languages'
import NavBar from '../features/NavBar'
import SettingsBox from '../features/Settings'
import SocialIcons from '../features/SocialIcons'

const AboutMe: React.FC = () => {
	return (
		<>
			<NavBar />
			<ContentWrapper>
				<Title bigTitle='About Me' smallTitle='About Me' />
				<Content2Columns>
					<Picture />
				</Content2Columns>
			</ContentWrapper>
			<SettingsBox />
			<SocialIcons />
			<Languages />
		</>
	)
}

export default AboutMe
