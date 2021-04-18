import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'components/Button/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { StyledLink } from 'styled/StyledLink/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { StyledH4 } from 'styled/StyledTitle/styled'
import { Wrapper } from '../Error/styled'

const SentEmail: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<StyledH4>
				<ColorfulText>{t('successfullySent.title')}</ColorfulText>
			</StyledH4>
			<Paragraph>
				{t('successfullySent.sentence1')}
				<br />
				{t('successfullySent.sentence2')}
			</Paragraph>
			<StyledLink to="/">
				<Button>{t('special.backToHomePage')}</Button>
			</StyledLink>
		</Wrapper>
	)
}

export default SentEmail
