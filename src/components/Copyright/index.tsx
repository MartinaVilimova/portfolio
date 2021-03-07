import React from 'react'
import { Text } from './styled'
import { ColorfulText } from '../../styled/ColorfulText/styled'
import { StyledLink } from '../../styled/StyledLink/styled'

const Copyright: React.FC = () => (
	<Text>
		Copyright &copy; 2021. Web vytvořila
		<StyledLink to="/">
			&nbsp;<ColorfulText>Martina Vilímová</ColorfulText>
		</StyledLink>
	</Text>
)

export default Copyright
