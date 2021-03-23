import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const HoverBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	background-color: ${({ theme }) => `${theme.bg.shadowBlack}E6`};
	border-radius: 1.4rem;
	opacity: 0;
	transform: scale(0.7);
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	transition: all 0.5s ease;
`

export const Wrapper = styled.article`
	display: flex;
	margin: 1rem 0.5rem;
	justify-self: center;
	justify-content: center;
	border-radius: 1.6rem;
	background-color: ${({ theme }) => theme.bg.primary};
	border: 5px solid ${({ theme }) => theme.bg.primary};
	width: 95%;
	height: auto;
	position: relative;
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};

	@media (max-width: ${MediaQueries.Desktop}) {
		width: 80%;
		margin: 1rem;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 70%;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		width: 100%;
	}

	&:hover {
		& ${HoverBox} {
			transform: scale(1);
			opacity: 1;
			transition: all 0.5s ease;
		}
	}
`

export const Picture = styled.img`
	width: 100%;
	border-radius: 1.5rem;
`

export const IconsBox = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`

export const IconButton = styled.button`
	display: flex;
	width: 2.3rem;
	height: 2.3rem;
	position: relative;
	padding: 0.5rem;
	margin: 0.5rem;
	border-radius: 50%;
	color: ${({ theme }) => theme.text.primary};
	background: radial-gradient(
			circle,
			${({ theme }) => theme.text.colorful.basicColor} 45%,
			transparent 100%
		),
		linear-gradient(
			132deg,
			${({ theme }) => theme.bg.shadowWhite} 40%,
			transparent 100%
		),
		linear-gradient(
			322deg,
			${({ theme }) => theme.bg.black} 20%,
			transparent 100%
		);
	filter: drop-shadow(5px 5px 5px ${({ theme }) => theme.bg.shadowBlack})
		drop-shadow(-5px -5px 5px ${({ theme }) => `${theme.bg.shadowWhite}80`});

	&:hover {
		color: ${({ theme }) => theme.bg.primary};
	}
`
