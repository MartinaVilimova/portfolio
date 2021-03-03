import styled from 'styled-components'

export const BallCircle = styled.div`
	position: absolute;
	top: 14em;
	left: 4em;
	display: block;
	background-color: ${({ theme }) => theme.text.colorful};
	filter: brightness(80%);
	width: 2em;
	height: 2em;
	border-radius: 50%;
	opacity: 0.6;
	transform-origin: center 500%;
	animation: ball3 16s infinite linear;

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
