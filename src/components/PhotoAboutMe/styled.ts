import styled from 'styled-components'
import { MediaQueries } from 'themes'

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	height: 100%;

	@media (max-width: ${MediaQueries.Desktop}) {
		height: 40rem;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		height: 35rem;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		height: 20rem;
	}
`

export const Photo = styled.img`
	width: auto;
	height: 90%;
	object-fit: cover;
	border-radius: 1.5rem;
	box-shadow: 8px 8px 8px ${({ theme }) => theme.bg.shadowBlack},
		-8px -8px 8px ${({ theme }) => theme.bg.shadowWhite};

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 80%;
		object-position: top;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		height: 80%;
	}
`
