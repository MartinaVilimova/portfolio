import React from 'react'
import { useTranslation } from 'react-i18next'
import Typed from 'react-typed'
import { Button } from 'components/Button/styled'
import { StyledH1, StyledH4 } from 'styled/StyledTitle/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { StyledLink } from 'styled/StyledLink/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { Wrapper } from './styled'

const IntroText: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Wrapper>
			<StyledH1>
				{t('homepage.firstName')}
				<ColorfulText>{t('homepage.lastName')}</ColorfulText>
			</StyledH1>
			<StyledH4>
				<ColorfulText>{t('homepage.workWith')}</ColorfulText>
				<Typed
					strings={[
						'HMTL',
						'CSS',
						'Styled Component',
						'JavaScript',
						'TypeScript',
						'React',
					]}
					typeSpeed={50}
					backSpeed={60}
					backDelay={3000}
					loop
				></Typed>
			</StyledH4>
			<Paragraph>{t('homepage.article')}</Paragraph>
			<StyledLink to="/CV_vilimova_martina.pdf" target="_blank" download>
				<Button>{t('special.downloadCV')}</Button>
			</StyledLink>
		</Wrapper>
	)
}

export default IntroText
