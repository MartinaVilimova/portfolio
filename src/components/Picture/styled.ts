import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	height: 100%;

	@media (max-width: ${MediaQueries.Ipad}) {
		height: 35em;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		height: 20em;
	}
`

export const Photo = styled.img`
	width: auto;
	height: 90%;
	object-fit: cover;
	border-radius: 1em;
	box-shadow: 0.5em 0.5em 0.5em ${({ theme }) => theme.bg.shadowBlack},
		-0.5em -0.5em 0.5em ${({ theme }) => theme.bg.shadowWhite};

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 80%;
		height: 90%;
		object-position: top;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		width: 80%;
		height: 80%;
	}
`
