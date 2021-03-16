import styled from 'styled-components'
import { StyledA } from '../../styled/StyledLink/styled'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	width: 90%;

	@media (max-width: ${MediaQueries.Ipad}) {
		margin: 0.7em 0;
	}
`

export const Icon = styled(StyledA)`
	display: flex;
	box-sizing: border-box;
	width: 2.5em;
	height: 2.5em;
	padding: 0.5em;
	margin: 0 1em 0.5em 1em;
	border-radius: 50%;
	color: ${({ theme }) => theme.text.colorful};
	box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};

	&:hover {
		box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite},
			0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack} inset,
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite} inset;
	}
`
