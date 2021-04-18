import React from 'react'
import { useTranslation } from 'react-i18next'
import WrapperPages, { UnitsData } from 'components/WrapperPages'
import Columns, { NumberColumns } from 'components/Columns'
import Title from 'components/Title'
import ResumeContent from 'contentPage/Resume'
import SettingsBox from 'features/Settings'
import SocialIcons from 'features/SocialIcons'
import Languages from 'features/Languages'
import NavBar from 'features/NavBar'

const Resume: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<NavBar />
			<WrapperPages units={UnitsData.SmallPage}>
				<Title
					bigTitle={t('menu.resume')}
					smallTitle={t('menu.resume')}
				/>
				<Columns
					columns={NumberColumns.Columns2}
					columnsIpad={NumberColumns.Columns1}
				>
					<ResumeContent />
				</Columns>
			</WrapperPages>
			<SettingsBox />
			<SocialIcons />
			<Languages />
		</>
	)
}

export default Resume
