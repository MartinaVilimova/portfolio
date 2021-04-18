import React from 'react'
import { useTranslation } from 'react-i18next'
import errorPhoto from 'assets/error-photo.png'
import { Button } from 'components/Button/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { StyledLink } from 'styled/StyledLink/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { StyledH4 } from 'styled/StyledTitle/styled'
import { Wrapper, Photo } from './styled'

const ErrorInfo: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<Photo src={errorPhoto} />
			<StyledH4>
				<ColorfulText>{t('error.title')}</ColorfulText>
			</StyledH4>
			<Paragraph>
				{t('error.sentence1')}
				<br />
				{t('error.sentence2')}
			</Paragraph>
			<StyledLink to="/">
				<Button>{t('special.backToHomePage')}</Button>
			</StyledLink>
		</Wrapper>
	)
}

export default ErrorInfo
