import React from 'react'
import { StyledLink } from 'styled/StyledLink/styled'
import { ColorfulText } from 'styled/ColorfulText/styled'
import { Text } from './styled'

const Copyright: React.FC = () => (
	<Text>
		<span>Copyright &copy; 2021.</span>
		<span>
			&nbsp;Web vytvořila
			<StyledLink to="/">
				<ColorfulText>&nbsp;Martina Vilímová</ColorfulText>
			</StyledLink>
		</span>
	</Text>
)

export default Copyright
