import React from 'react'
import { ColorfulText } from '../../styled/ColorfulText/styled'
import { Wrapper,  Subtitle } from './styled'
import Typed from 'react-typed'
import { Button } from '../../components/Button/styled'
import { StyledLink } from '../../styled/StyledLink/styled'
import { StyledH1, StyledH4 } from '../../styled/StyledTitle/styled'

const IntroText: React.FC = () => {
	return (
		<Wrapper>
			<StyledH1>
				Martina <ColorfulText>Vilímová</ColorfulText>
			</StyledH1>
			<StyledH4>
				<ColorfulText>Pracuji s</ColorfulText>{' '}
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
			<Subtitle>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
				dolor felis, sagittis at, luctus sed, aliquam non, tellus. Etiam
				egestas wisi a erat. Mauris metus. Quisque porta.
			</Subtitle>
			<StyledLink to="/">
				<Button>Stáhnout životopis</Button>
			</StyledLink>
		</Wrapper>
	)
}

export default IntroText
