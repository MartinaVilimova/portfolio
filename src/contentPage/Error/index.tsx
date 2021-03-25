import React from 'react'
import errorPhoto from '../../assets/error-photo.png'
import { Button } from '../../components/Button/styled'
import { ColorfulText } from '../../styled/ColorfulText/styled'
import { StyledLink } from '../../styled/StyledLink/styled'
import { Paragraph } from '../../styled/StyledParagraph/styled'
import { StyledH4 } from '../../styled/StyledTitle/styled'
import { Wrapper, Photo } from './styled'

const ErrorInfo: React.FC = () => (
	<Wrapper>
		<Photo src={errorPhoto} />
		<StyledH4>
			<ColorfulText>
				Hledala jsem, kde se dalo, ale tuhle stránku jsem nenašla.
			</ColorfulText>
		</StyledH4>
		<Paragraph>
			Ujistěte se prosím, že jste neudělali chybu v URL adrese.
			<br />
			Je také možné, že byla stránka přemístěna nebo odstraněna.
		</Paragraph>
		<StyledLink to="/">
			<Button>Přejít na úvodní stránku</Button>
		</StyledLink>
	</Wrapper>
)

export default ErrorInfo
