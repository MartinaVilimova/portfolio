import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	grid-column: 2;

	@media (max-width: ${MediaQueries.Ipad}) {
		grid-column: 1;
	}
`

export const ContentProfilePhoto = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 33em;
	position: relative;

	@media (max-width: ${MediaQueries.Desktop}) {
		height: 32em;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		height: 33em;
		max-width: 29em;
	}
`

export const ColorShape = styled.div`
	background-color: ${({ theme }) => theme.text.colorful};
	border-radius: 26% 74% 66% 34% / 47% 34% 66% 53%;
	box-shadow: 0.5em 0.5em 0.5em ${({ theme }) => theme.bg.shadowBlack},
		-0.5em -0.5em 0.5em ${({ theme }) => theme.bg.shadowWhite};
	width: 28.7em;
	height: 25.8em;
	position: absolute;
	bottom: 2em;

	@media (max-width: ${MediaQueries.Desktop}) {
		max-width: 27.7em;
		height: 24.8em;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 28.7em;
		height: 25.8em;
	}
`

export const Photo = styled.img`
	max-width: 25em;
	position: absolute;
	bottom: 0;
	left: 1.1em;
	filter: drop-shadow(0.3em 0.3em 0.3em ${({ theme }) => theme.bg.black})
		drop-shadow(
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite}80
		);

	@media (max-width: ${MediaQueries.Desktop}) {
		max-width: 24em;
		left: 1.05em;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 25em;
		left: 1.1em;
	}
`
