import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.div`
	background-color: blue;
	width: 100%;
	height: 100%;
`

export const Container = styled.div`
	margin: auto;
	width: 100%;
	height: 100%;
	height: 31.312em;
	position: relative;
	background-color: blue;

	@media (max-width: ${MediaQueries.Ipad}) {
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
	bottom: 0;

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 29em;
		height: 26em;
	}
`

export const Picture = styled.img`
	max-width: 25em;
	position: absolute;
	bottom: 0;
	left: 1.1em;
	filter: drop-shadow(0.3em 0.3em 0.3em ${({ theme }) => theme.bg.black})
		drop-shadow(
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite}80
		);

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 25em;
	}
`
