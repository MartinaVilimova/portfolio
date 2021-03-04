import styled from 'styled-components'

export const BallScale = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.text.colorful};
	top: 2em;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	animation: ballScale 2s linear;
	animation-iteration-count: 1;

	@keyframes ballScale {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.3);
		}
		100% {
			transform: scale(1);
		}
	}
`
