import styled from 'styled-components'
import { MediaQueries } from '../../../themes'

export const BallCircle = styled.div`
	position: absolute;
	top: 14em;
	left: 4em;
	display: block;
	background-color: ${({ theme }) => theme.text.colorful.basicColor};
	box-shadow: 0.2em 0.2em 0.3em
			${({ theme }) => theme.text.colorful.lightColor} inset,
		-0.2em -0.2em 0.3em ${({ theme }) => theme.text.colorful.darkColor}
			inset;
	filter: brightness(80%);
	width: 2em;
	height: 2em;
	border-radius: 50%;
	opacity: 0.6;
	transform-origin: center 500%;
	animation: ball3 16s infinite linear;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		top: 12em;
		transform-origin: center 300%;
	}

	@keyframes ball3 {
		to {
			transform: rotate(1turn);
		}
	}

	@keyframes circle {
		to {
			transform: rotateY(2em);
		}
	}
`
