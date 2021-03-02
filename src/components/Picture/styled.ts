import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: red;

	@media (max-width: ${MediaQueries.Ipad}) {
	}
`

export const Photo = styled.img`
	height: 90%;
	object-fit: cover;
	border-radius: 1em;
	box-shadow: 0.5em 0.5em 0.5em ${({ theme }) => theme.bg.shadowBlack},
		-0.5em -0.5em 0.5em ${({ theme }) => theme.bg.shadowWhite};
	
	@media (max-width: ${MediaQueries.Ipad}) {
	}
`
