import React from 'react'
import { StyledH2 } from '../../styled/StyledTitle/styled'
import { Wrapper, BigTitle } from './styled'

type Props = {
	bigTitle: string
	smallTitle: string
}

const Title: React.FC<Props> = ({ bigTitle, smallTitle }) => (
	<Wrapper>
		<BigTitle>{bigTitle}</BigTitle>
		<StyledH2>{smallTitle}</StyledH2>
	</Wrapper>
)

export default Title
