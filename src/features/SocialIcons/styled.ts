import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 3.5em;
	position: absolute;
	bottom: 1em;
	z-index: 997;

	@media (max-width: ${MediaQueries.Ipad}) {
		display: none;
	}
`

export const VerticalText = styled.p`
	color: ${({ theme }) => theme.text.primary};
	writing-mode: vertical-rl;
	text-orientation: upright;
	font-size: 0.9em;
`

export const Line = styled.div`
	background-color: ${({ theme }) => theme.text.colorful};
	width: 0.1em;
	height: 3em;
	margin: 1em 0;
`

export const Icon = styled.a`
	display: flex;
	box-sizing: border-box;
	width: 1.7em;
	height: 1.7em;
	padding: 0.3em;
	margin: 0.2em;
	border-radius: 50%;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		color: ${({ theme }) => theme.text.colorful};
		box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack}
				inset,
			-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite} inset;
	}
`
