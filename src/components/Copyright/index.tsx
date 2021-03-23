import React from 'react'
import { Text } from './styled'
import { ColorfulText } from '../../styled/ColorfulText/styled'
import { StyledLink } from '../../styled/StyledLink/styled'

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
