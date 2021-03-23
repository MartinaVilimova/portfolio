import styled from 'styled-components'

export const LineY = styled.div`
	position: absolute;
	display: block;
	background-color: ${({ theme }) => theme.text.colorful.basicColor};
	width: 0.1rem;
	height: 92%;
	animation: LineY 2s linear;
	animation-iteration-count: 1;

	@keyframes LineY {
		from {
			height: 0%;
		}
		to {
			height: 92%;
		}
	}
`
