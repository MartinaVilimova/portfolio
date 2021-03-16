import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const StyledA = styled.a`
	text-decoration: none;
	font-weight: 500;
	color: ${({ theme }) => theme.text.colorful.basicColor};
`
