import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
	display: flex;
	position: fixed;
	padding: 0 1rem 0.7rem 0;
	bottom: 0;
	right: 0;

	@media (max-width: ${MediaQueries.Ipad}) {
		position: fixed;
		top: 1rem;
		right: 4rem;
		z-index: 999;
		height: 2.5rem;
	}
`

export const Language = styled.button<{ active: boolean }>`
	margin: 0.5rem 0.3rem;
	padding: 0.1rem 0.6rem;
	font-size: 1rem;
	letter-spacing: 2px;
	border-radius: 1rem;
	color: ${({ theme }) => theme.text.primary};
	box-shadow: 1.5px 1.5px 1.5px ${({ theme }) => theme.bg.shadowBlack},
		-1.5px -1.5px 1.5px ${({ theme }) => theme.bg.shadowWhite};
	position: relative;

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}

	${({ active, theme }) =>
		active &&
		`
		color: ${theme.text.colorful.basicColor};
		box-shadow: 1.5px 1.5px 1.5px ${theme.bg.shadowBlack}
				inset,
			-1.5px -1.5px 1.5px ${theme.bg.shadowWhite} inset;
	`}

	@media (max-width: ${MediaQueries.Ipad}) {
		box-shadow: none;
		padding: 0;
		margin: 0.5rem;

		&:hover {
			color: ${({ theme }) => theme.text.colorful.basicColor};
			box-shadow: none;
		}
	}
`
