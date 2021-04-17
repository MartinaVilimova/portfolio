import React from 'react'
import Typed from 'react-typed'
import { Button } from 'components/Button/styled'
import { StyledH1, StyledH4 } from 'styled/StyledTitle/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { StyledLink } from 'styled/StyledLink/styled'
import { Paragraph } from 'styled/StyledParagraph/styled'
import { Wrapper } from './styled'

const IntroText: React.FC = () => {
	return (
		<Wrapper>
			<StyledH1>
				Martina <ColorfulText>Vilímová</ColorfulText>
			</StyledH1>
			<StyledH4>
				<ColorfulText>Pracuji s </ColorfulText>
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
			<Paragraph>
				Lorem ipsum Lorem ipsum dolor sit amet, consectetuer adipiscing
				elit. Mauris dolor felis, sagittis at, luctus sed, aliquam non,
				tellus. Etiam egestas wisi a erat. Mauris metus. Quisque porta.
			</Paragraph>
			<StyledLink to="/CV_vilimova_martina.pdf" target="_blank" download>
				<Button>Stáhnout životopis</Button>
			</StyledLink>
		</Wrapper>
	)
}

export default IntroText
