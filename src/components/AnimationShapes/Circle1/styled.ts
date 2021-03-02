import styled from 'styled-components'
import { MediaQueries } from '../../../themes'

export const Circle1 = styled.div`
	position: absolute;
	display: block;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	top: 4em;
	right: 5em;
	opacity: 0.8;
	animation: circle1 20s infinite;

	@media (max-width: ${MediaQueries.Ipad}) {
		right: 2em;
	}

	@keyframes circle1 {
		0% {
			transform: scale(1);
			top: 4em;
			background-color: ${({ theme }) => theme.text.colorful};
		}
		50% {
			transform: scale(2.5);
			top: 28em;
			background-color: ${({ theme }) => theme.text.primary};
		}
		100% {
			transform: scale(1);
			top: 4em;
			background-color: ${({ theme }) => theme.text.colorful};
		}
	}
`
