import styled from 'styled-components'
import { MediaQueries } from 'themes'

export const Wrapper = styled.article`
	width: 90%;
	display: flex;
	justify-content: center;
	padding: 2rem 0;

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 100%;
	}

	.carousel-root {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.carousel.carousel-slider {
		border-radius: 1.5rem;
		border: 8px solid ${({ theme }) => theme.bg.primary};
		box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
			-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};
	}

	.carousel {
		width: 80%;
		margin-top: 1rem;
		border-radius: 1rem;
		box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack} inset,
			-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite} inset;

		@media (max-width: ${MediaQueries.Ipad}) {
			width: 85%;
		}

		.control-prev.control-arrow:before {
			border-right: 8px solid
				${({ theme }) => theme.text.colorful.basicColor};
		}

		.control-next.control-arrow:before {
			border-left: 8px solid
				${({ theme }) => theme.text.colorful.basicColor};
		}

		.control-dots {
			padding: 0.5rem;
			margin: 0;
			transition: all 0.25s ease-in;
			background-color: ${({ theme }) => `${theme.bg.primary}00`};

			&:hover {
				transition: all 0.25s ease-in;
				background-color: ${({ theme }) => `${theme.bg.primary}B3`};
			}

			.dot {
				background-color: ${({ theme }) =>
					theme.text.colorful.basicColor};
				outline: none;
				box-shadow: 1.5px 1.5px 1.5px
					${({ theme }) => theme.bg.shadowBlack};
				height: 0.7rem;
				width: 0.7rem;
			}
		}

		.thumb {
			border-radius: 0.7rem;
			padding: 0;
			border: none;
			cursor: pointer;

			&:hover {
				border: 3px solid
					${({ theme }) => theme.text.colorful.basicColor};
			}

			img {
				border-radius: 0.5rem;
				padding: 0;
				margin: 0;
			}
		}

		.thumb.selected,
		.carousel .thumb {
			border: 3px solid ${({ theme }) => theme.text.colorful.basicColor};
			border-radius: 14px;
		}

		.thumbs-wrapper {
			width: 88%;
			margin: auto;

			@media (max-width: ${MediaQueries.Ipad}) {
				width: 85%;
			}

			@media (max-width: ${MediaQueries.SmallerIpad}) {
				display: none;
			}

			ul {
				display: flex;
				padding: 0.6rem 0;
			}
		}
	}
`

export const WrapperPicture = styled.div`
	width: 100%;
	border-radius: 1.5rem;
`

export const Picture = styled.img`
	width: 80%;
`
