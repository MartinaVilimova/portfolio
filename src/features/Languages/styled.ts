import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
	display: flex;
	position: absolute;
	padding: 0 1em 0.5em 0;
	bottom: 0;
	right: 0;

	@media (max-width: ${MediaQueries.Ipad}) {
		position: fixed;
		top: 1em;
		right: 4em;
		z-index: 999;
		height: 2.5em;
	}
`

export const Language = styled.span`
	margin: 0.5em;
	letter-spacing: 2px;
	color: ${({ theme }) => theme.text.primary};
	position: relative;
	cursor: pointer;

	@media (max-width: ${MediaQueries.Ipad}) {
		&:active {
			color: ${({ theme }) => theme.text.colorful};
		}
	}

	&:before {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: ${({ theme }) => theme.text.colorful};
		visibility: hidden;
		transition: all 0.3s ease-in-out;
	}

	&:hover:before {
		visibility: visible;
		width: 100%;

		@media (max-width: ${MediaQueries.Ipad}) {
			width: 0;
		}
	}
`