import React from 'react'
import { useTranslation } from 'react-i18next'
import { getDataEducation, getDataExperience } from 'components/ItemResume/data'
import ItemResume, { AnimationType } from 'components/ItemResume'
import { StyledH3 } from 'styled/StyledTitle/styled'
import { Article, WrapperItems } from './styled'

const ResumeContent: React.FC = () => {
	const { t } = useTranslation()

	const education = getDataEducation(t)
	const experience = getDataExperience(t)

	return (
		<>
			<Article>
				<StyledH3>{t('resume.educationTitle')}</StyledH3>
				<WrapperItems>
					<ItemResume
						data={education}
						animationType={AnimationType.Zoom}
					/>
				</WrapperItems>
			</Article>
			<Article>
				<StyledH3>{t('resume.experienceTitle')}</StyledH3>
				<WrapperItems>
					<ItemResume
						data={experience}
						animationType={AnimationType.Zoom}
					/>
				</WrapperItems>
			</Article>
		</>
	)
}

export default ResumeContent
