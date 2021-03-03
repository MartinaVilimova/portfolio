import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Button = styled.button`
	display: inline;
	padding: 0.7em 1.4em;
	justify-content: center;
	font-size: 1em;
	color: ${({ theme }) => theme.text.colorful};
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
		color: ${({ theme }) => theme.text.primary};
	}

	&:active {
		box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite},
			0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack} inset,
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite} inset;
		color: ${({ theme }) => theme.text.colorful};
	}
`
