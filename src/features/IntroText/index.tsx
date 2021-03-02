import React from 'react'
import { ColorfulText } from '../../styled/ColorfulText/styled'
import { Wrapper, Title, Profession, Subtitle } from './styled'
import Typed from 'react-typed'
import { Button } from '../../components/Button/styled'
import { StyledLink } from '../../styled/StyledLink/styled'

const IntroText: React.FC = () => {
	return (
		<Wrapper>
			<Title>
				Martina <ColorfulText>Vilímová</ColorfulText>
			</Title>
			<Profession>
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
			</Profession>
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
