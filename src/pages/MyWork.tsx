import React from 'react'
import { useTranslation } from 'react-i18next'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import ContentMyWork from 'contentPage/MyWork'
import Title from 'components/Title'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import Languages from 'features/Languages'
import NavBar from 'features/NavBar'

const MyWork: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<NavBar />
			<WrapperPages units={UnitsData.LargePage}>
				<Title
					bigTitle={t('menu.myWork')}
					smallTitle={t('menu.myWork')}
				/>
				<ContentMyWork />
			</WrapperPages>
			<SettingsBox />
			<SocialIcons />
			<Languages />
		</>
	)
}

export default MyWork
