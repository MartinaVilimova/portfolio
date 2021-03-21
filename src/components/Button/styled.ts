import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Button = styled.button`
	display: inline;
	padding: 0.7em 1.4em;
	justify-content: center;
	font-size: 1em;
	font-family: 'Poppins', sans-serif;
	color: ${({ theme }) => `${theme.text.colorful.basicColor}B3`};
	background-color: ${({ theme }) => theme.bg.primary};
	border-radius: 1em;
	border: 1px solid ${({ theme }) => theme.bg.primary};
	box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};
	cursor: pointer;
	outline: none;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		padding: 0.7em 1em;
	}

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}

	&:active {
		box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite},
			0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack} inset,
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite} inset;
		text-shadow: none;
	}
`

export const SmallButton = styled(Button)<{ active: boolean }>`
	padding: 0.6em 1.2em;
	margin: 0.5em;
	font-size: 1em;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		padding: 0.5em 1em;
	}

	&:hover {
		text-shadow: none;
		box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite},
			0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack} inset,
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite} inset;
	}

	${({ active, theme }) =>
		active &&
		`
		text-shadow: none;
		color: ${theme.text.colorful.basicColor};
		box-shadow: 0.3em 0.3em 0.3em ${theme.bg.shadowBlack},
			-0.3em -0.3em 0.3em ${theme.bg.shadowWhite},
			0.3em 0.3em 0.3em ${theme.bg.shadowBlack} inset,
			-0.3em -0.3em 0.3em ${theme.bg.shadowWhite} inset;
	`}
`
