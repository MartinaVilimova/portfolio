import React from 'react'
import { Button } from 'components/Button/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { StyledLink } from 'styled/StyledLink/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { StyledH4 } from 'styled/StyledTitle/styled'
import { Wrapper } from '../Error/styled'

const SentEmail: React.FC = () => (
	<Wrapper>
		<StyledH4>
			<ColorfulText>Zpráva odeslána</ColorfulText>
		</StyledH4>
		<Paragraph>
			Vaše zpráva mi byla úspěšně odeslána na email.
			<br />
			Budu se snažit na ní odpovědět co nejdříve.
		</Paragraph>
		<StyledLink to="/">
			<Button>Přejít na úvodní stránku</Button>
		</StyledLink>
	</Wrapper>
)

export default SentEmail
