import styled, { css } from 'styled-components'
import { MediaQueries } from 'themes'

export const Wrapper = styled.div<{ visible: boolean }>`
	display: ${({ visible }) => (visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 1.9rem 0 0 1.5rem;
	background-color: ${({ theme }) => `${theme.bg.shadowBlack}B3`};
	z-index: 1000;

	@media (max-width: ${MediaQueries.Ipad}) {
		padding: 1.5rem 0 0 0;
	}

	& > div {
		width: 60%;
		height: 95vh;
		margin: auto;

		@media (max-width: ${MediaQueries.Desktop}) {
			width: 70%;
		}

		@media (max-width: ${MediaQueries.Ipad}) {
			width: 90%;
		}
	}
`
const sameLayout = css`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ModalBox = styled.section<{ animate: boolean }>`
	${sameLayout};
	width: 100%;
	height: 100%;
	position: relative;
	background-color: ${({ theme }) => theme.bg.primary};
	opacity: 0;
	z-index: 1001;
	border-radius: 0.5rem;
	box-shadow: 3px 3px 3px ${({ theme }) => theme.bg.shadowBlack},
		-3px -3px v ${({ theme }) => theme.bg.shadowWhite};
	animation: ${({ animate }) => (animate ? 'animateStart' : 'animateEnd')}
		0.5s forwards ease;

	@keyframes animateStart {
		from {
			transform: translateY(-2rem);
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes animateEnd {
		from {
			transform: translateY(0);
			opacity: 1;
		}
		to {
			transform: translateY(-2rem);
		}
	}
`

export const FixedTitle = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3.7rem;
	border-bottom: 1px solid ${({ theme }) => `${theme.text.grey}80`};
	padding: 0.5rem 1.5rem;
`

export const IconCross = styled.button`
	width: 2.7rem;
	height: 2.7rem;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}
`

export const DescriptionContent = styled.div`
	${sameLayout};
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	padding: 0 1.5rem;

	&::-webkit-scrollbar {
		width: 1rem;
	}

	&::-webkit-scrollbar-track {
		border-radius: 0.8rem;
		background: ${({ theme }) => theme.bg.primary};
		box-shadow: 2px 2px 2px ${({ theme }) => theme.bg.shadowBlack} inset,
			-2px -2px 2px ${({ theme }) => theme.bg.shadowWhite} inset;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.text.colorful.basicColor};
		box-shadow: 2px 2px 2px ${({ theme }) => theme.text.colorful.lightColor}
				inset,
			-2px -2px 2px ${({ theme }) => theme.text.colorful.darkColor} inset;
		border-radius: 0.8rem;
	}

	&::-webkit-scrollbar-thumb:hover {
		box-shadow: 1px 1px 1px ${({ theme }) => theme.text.colorful.lightColor}
				inset,
			-1px -1px 1px ${({ theme }) => theme.text.colorful.darkColor} inset;
	}

	h6 {
		text-align: center;
		padding-bottom: 0.5rem;
	}

	& > section {
		width: 90%;
		border-radius: 1rem;
		box-shadow: 2px 2px 2px ${({ theme }) => theme.bg.shadowBlack} inset,
			-2px -2px 2px ${({ theme }) => theme.bg.shadowWhite} inset;
		padding: 1rem 0;

		@media (max-width: ${MediaQueries.Ipad}) {
			width: 100%;
		}
	}
`

export const Article = styled.article`
	${sameLayout};
	width: 100%;
	height: 100%;
	padding: 1rem 0.5rem;

	&:nth-child(1) {
		grid-column: 1/3;

		@media (max-width: ${MediaQueries.Ipad}) {
			grid-column: 1/2;
		}
	}
`

export const ArticleText = styled.span`
	text-align: center;
`
