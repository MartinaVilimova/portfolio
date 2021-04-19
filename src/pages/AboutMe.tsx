import React from 'react'
import { useTranslation } from 'react-i18next'
import Columns, { NumberColumns } from 'components/Columns'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import PhotoAboutMe from 'components/PhotoAboutMe'
import Title from 'components/Title'
import AboutMeText from 'contentPage/AboutMe'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import NavBar from 'features/NavBar'

const AboutMe: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<NavBar />
			<WrapperPages units={UnitsData.SmallPage}>
				<Title
					bigTitle={t('menu.aboutMe')}
					smallTitle={t('menu.aboutMe')}
				/>
				<Columns
					columns={NumberColumns.Columns2}
					columnsIpad={NumberColumns.Columns1}
				>
					<PhotoAboutMe />
					<AboutMeText />
				</Columns>
			</WrapperPages>
			<SettingsBox />
			<SocialIcons />
		</>
	)
}

export default AboutMe
