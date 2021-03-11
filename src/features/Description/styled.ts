import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.div<{ visible: boolean }>`
	display: ${({ visible }) => (visible ? 'block' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 1.9em 0 0 1.5em;
	background-color: ${({ theme }) => theme.bg.shadowBlack}B3;
	z-index: 1000;

	@media (max-width: ${MediaQueries.Ipad}) {
		padding: 1.5em 0 0 0;
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

export const ModalBox = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	background-color: ${({ theme }) => theme.bg.primary};
	opacity: 0;
	z-index: 1001;
	border-radius: 0.5em;
	box-shadow: 0.2em 0.2em 0.2em ${({ theme }) => theme.bg.shadowBlack},
		-0.2em -0.2em 0.2em ${({ theme }) => theme.bg.shadowWhite};
	animation: animateTop 0.5s forwards ease;

	@keyframes animateTop {
		from {
			transform: translateY(-2em);
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
`

export const FixedTitle = styled.header`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3.7em;
	border-bottom: 1px solid ${({ theme }) => theme.text.grey}80;
	padding: 0.5em 1.5em;
`

export const IconCross = styled.div`
	width: 2em;
	height: 2em;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.text.colorful};
	}
`

export const DescriptionContent = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	padding: 0 1.5em;

	& h6 {
		text-align: center;
		padding-bottom: 0.5em;
	}

	& > section {
		width: 90%;
		border-radius: 1em;
		box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack}
				inset,
			-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite} inset;
		padding: 1em 0;
	}
`

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 1em 0;

	&:nth-child(1) {
		grid-column: 1/3;

		@media (max-width: ${MediaQueries.Ipad}) {
			grid-column: 1/2;
		}
	}
`
