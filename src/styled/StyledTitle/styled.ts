import styled from 'styled-components'
import { MediaQueries } from 'themes'

export const StyledH1 = styled.h1`
	font-weight: 500;
	font-size: 2.5rem;
	letter-spacing: 0.5px;
	padding-bottom: 0.7rem;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		font-size: 2rem;
	}
`

export const StyledH2 = styled.h2`
	width: 100%;
	position: absolute;
	top: 0.4rem;
	font-weight: 900;
	font-size: 2rem;
	color: ${({ theme }) => theme.text.colorful.basicColor};
	text-align: center;
	margin: 0;
`

export const StyledH3 = styled.h3`
	font-weight: 500;
	font-size: 1.75rem;
	text-align: center;
	padding-bottom: 0.7rem;
`

export const StyledH4 = styled.h4`
	font-weight: 300;
	font-size: 1.5rem;
	padding-bottom: 1rem;
`

export const StyledH5 = styled.h5`
	font-size: 1.3rem;
	font-weight: 500;
	color: ${({ theme }) => theme.text.colorful.basicColor};
`

export const StyledH6 = styled.h6`
	width: 100%;
	font-weight: 500;
	font-size: 1.1rem;
`
