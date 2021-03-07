import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
	text-decoration: none;
	cursor: pointer;
`

export const StyledA = styled.a`
	text-decoration: none;
	cursor: pointer;
	font-weight: 500;
	color: ${({ theme }) => theme.text.colorful};
`
