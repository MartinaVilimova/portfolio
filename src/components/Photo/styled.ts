import styled from 'styled-components'

export const Wrapper = styled.div`
	margin: auto;
	max-width: 33em;
	height: 31.312em;
	position: relative;

	@media (max-width: 50em) {
		max-width: 29em;
	}
`

export const ColorShape = styled.div`
	background-color: ${({ theme }) => theme.text.colorful};
	border-radius: 26% 74% 66% 34% / 47% 34% 66% 53%;
	box-shadow: 0.5em 0.5em 0.5em ${({ theme }) => theme.bg.shadowBlack},
		-0.5em -0.5em 0.5em ${({ theme }) => theme.bg.shadowWhite};
	width: 33em;
	height: 28.8em;
	position: absolute;
	bottom: 0;

	@media (max-width: 50em) {
		max-width: 29em;
		height: 26em;
	}
`

export const Picture = styled.img`
	max-width: 29.1em;
	position: absolute;
	bottom: 0;
	left: 1.1em;
	filter: drop-shadow(0.3em 0.3em 0.3em ${({ theme }) => theme.bg.black})
		drop-shadow(
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite}80
		);

	@media (max-width: 50em) {
		max-width: 25.1em;
	}
`
