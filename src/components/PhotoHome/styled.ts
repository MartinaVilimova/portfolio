import styled from 'styled-components'
import { MediaQueries } from 'themes'

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
	height: 33rem;
	position: relative;

	@media (max-width: ${MediaQueries.Desktop}) {
		height: 32rem;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		height: 34rem;
		max-width: 29rem;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		height: 24rem;
		max-width: 19.7rem;
	}
`

export const ColorShape = styled.div`
	background: linear-gradient(
		318deg,
		${({ theme }) => theme.text.colorful.darkColor} 0%,
		${({ theme }) => theme.text.colorful.basicColor} 50%,
		${({ theme }) => theme.text.colorful.lightColor} 100%
	);
	border-radius: 26% 74% 66% 34% / 47% 34% 66% 53%;
	box-shadow: 8px 8px 8px ${({ theme }) => theme.bg.shadowBlack},
		-8px -8px 8px ${({ theme }) => theme.bg.shadowWhite};
	width: 28.7rem;
	height: 25.8rem;
	position: absolute;
	bottom: 2rem;

	@media (max-width: ${MediaQueries.Desktop}) {
		max-width: 27.7rem;
		height: 24.8rem;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 28.7rem;
		height: 25.8rem;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		max-width: 19.7rem;
		height: 17.5rem;
	}
`

export const Photo = styled.img`
	max-width: 25rem;
	position: absolute;
	bottom: 0;
	left: 1.1rem;
	filter: drop-shadow(5px 5px 8px ${({ theme }) => theme.bg.black})
		drop-shadow(-5px -5px 5px ${({ theme }) => `${theme.bg.shadowWhite}40`});

	@media (max-width: ${MediaQueries.Desktop}) {
		max-width: 24rem;
		left: 1.05rem;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 25rem;
		left: 1.1rem;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		max-width: 17rem;
		left: 0.8rem;
	}
`
