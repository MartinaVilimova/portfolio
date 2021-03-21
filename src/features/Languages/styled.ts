import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
	display: flex;
	position: fixed;
	padding: 0 1em 0.7em 0;
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

export const Language = styled.span<{ active: boolean }>`
	margin: 0.5em 0.3em;
	padding: 0 0.6em;
	letter-spacing: 2px;
	border-radius: 1em;
	color: ${({ theme }) => theme.text.primary};
	box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack},
		-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite};
	position: relative;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}

	${({ active, theme }) =>
		active &&
		`
		color: ${theme.text.colorful.basicColor};
		box-shadow: 0.1em 0.1em 0.1em ${theme.bg.shadowBlack}
				inset,
			-0.1em -0.1em 0.1em ${theme.bg.shadowWhite} inset;
	`}

	@media (max-width: ${MediaQueries.Ipad}) {
		box-shadow: none;
		padding: 0;
		margin: 0.5em;

		&:hover {
			color: ${({ theme }) => theme.text.colorful.basicColor};
			box-shadow: none;
		}
	}
`
