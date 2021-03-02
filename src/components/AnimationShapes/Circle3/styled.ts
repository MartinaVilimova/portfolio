import styled from 'styled-components'

export const Circle3 = styled.div`
	position: absolute;
	top: 14em;
	left: 4em;
	display: block;
	background-color: ${({ theme }) => theme.text.colorful};
	width: 2em;
	height: 2em;
	border-radius: 50%;
	opacity: 0.6;
	transform-origin: center 500%;
	animation: circle3 16s infinite linear;

	@keyframes circle3 {
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
