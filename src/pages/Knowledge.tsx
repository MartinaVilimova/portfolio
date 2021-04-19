import React from 'react'
import { useTranslation } from 'react-i18next'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import KnowledgeContent from 'contentPage/Knowledge'
import Title from 'components/Title'
import ButtonScrollTop from 'features/ButtonScrollTop'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import NavBar from 'features/NavBar'

const Knowledge: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<NavBar />
			<WrapperPages units={UnitsData.LargePage}>
				<Title
					bigTitle={t('menu.knowledge')}
					smallTitle={t('menu.knowledge')}
				/>
				<KnowledgeContent />
			</WrapperPages>
			<SettingsBox />
			<SocialIcons />
			<ButtonScrollTop />
		</>
	)
}

export default Knowledge
