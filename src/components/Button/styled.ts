import styled, { css } from 'styled-components'
import { MediaQueries } from '../../themes'

const sameStyle = css`
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite},
		5px 5px 5px ${({ theme }) => theme.bg.shadowBlack} inset,
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite} inset;
`

export const Button = styled.button`
	display: inline;
	padding: 0.7rem 1.4rem;
	justify-content: center;
	font-size: 1rem;
	color: ${({ theme }) => `${theme.text.colorful.basicColor}B3`};
	border-radius: 1rem;
	border: 1px solid ${({ theme }) => theme.bg.primary};
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		padding: 0.7rem 1rem;
	}

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}

	&:active {
		${sameStyle};
		text-shadow: none;
	}
`

export const SmallButton = styled(Button)<{ active: boolean }>`
	padding: 0.5rem 1.2rem;
	margin: 0.6rem;
	font-size: 0.95rem;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		padding: 0.5rem 1rem;
	}

	&:hover {
		text-shadow: none;
		${sameStyle};
	}

	${({ active, theme }) =>
		active &&
		`
		text-shadow: none;
		color: ${theme.text.colorful.basicColor};
		box-shadow: 5px 5px 5px ${theme.bg.shadowBlack},
			-5px -5px 5px ${theme.bg.shadowWhite},
			5px 5px 5px ${theme.bg.shadowBlack} inset,
			-5px -5px 5px ${theme.bg.shadowWhite} inset;
	`}
`
