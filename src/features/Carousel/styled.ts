import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	width: 90%;
	display: flex;
	justify-content: center;
	padding: 2em 0;

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 100%;
	}

	& .carousel-root {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	& .carousel.carousel-slider {
		box-sizing: border-box;
		border-radius: 1.5em;
		border: 0.5em solid ${({ theme }) => theme.bg.primary};
		box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};
	}

	& .carousel {
		width: 80%;
		margin-top: 1em;
		border-radius: 1em;
		box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack}
				inset,
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite} inset;

		@media (max-width: ${MediaQueries.Ipad}) {
			width: 85%;
		}

		& .control-prev.control-arrow:before {
			border-right: 8px solid
				${({ theme }) => theme.text.colorful.basicColor};
		}

		& .control-next.control-arrow:before {
			border-left: 8px solid
				${({ theme }) => theme.text.colorful.basicColor};
		}

		& .control-dots {
			padding: 0.5em;
			margin: 0;
			transition: all 0.25s ease-in;
			background-color: ${({ theme }) => `${theme.bg.primary}00`};

			&:hover {
				transition: all 0.25s ease-in;
				background-color: ${({ theme }) => `${theme.bg.primary}B3`};
			}

			& .dot {
				background-color: ${({ theme }) =>
					theme.text.colorful.basicColor};
				outline: none;
				box-shadow: 0.1em 0.1em 0.1em
					${({ theme }) => theme.bg.shadowBlack};
				height: 0.7em;
				width: 0.7em;
			}
		}

		& .thumb {
			border-radius: 0.7em;
			border: none;
			cursor: pointer;

			&:hover {
				border: 3px solid
					${({ theme }) => theme.text.colorful.basicColor};
			}

			& img {
				border-radius: 0.5em;
			}
		}

		& .thumb.selected,
		.carousel .thumb {
			border: 3px solid ${({ theme }) => theme.text.colorful.basicColor};
		}

		& .thumbs-wrapper {
			width: 88%;
			margin: auto;

			@media (max-width: ${MediaQueries.Ipad}) {
				width: 85%;
			}

			@media (max-width: ${MediaQueries.SmallerIpad}) {
				display: none;
			}

			& ul {
				padding: 0;
			}
		}
	}
`

export const WrapperPicture = styled.div`
	width: 100%;
	border-radius: 1.5em;
`

export const Picture = styled.img`
	width: 80%;
`
