import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import ItemResume, { AnimationType } from 'components/ItemResume'
import { getDataKnowledge } from 'components/ItemResume/data'
import { StyledH3, StyledH6 } from 'styled/StyledTitle/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { BlockAnchors } from './styled'

const KnowledgeContent: React.FC = () => {
	const { t } = useTranslation()
	const knowledge = getDataKnowledge(t)

	return (
		<>
			<StyledH3>{t('knowledge.title')}</StyledH3>
			<Paragraph>{t('knowledge.subtitle')}</Paragraph>
			<BlockAnchors>
				<StyledH6>{t('knowledge.titleAnchor')}</StyledH6>
				{knowledge.map((text, index) => (
					<Link
						key={index}
						to={text.title}
						smooth={true}
						offset={-85}
					>
						{text.title}
					</Link>
				))}
			</BlockAnchors>
			<ItemResume data={knowledge} animationType={AnimationType.Fade} />
		</>
	)
}

export default KnowledgeContent
