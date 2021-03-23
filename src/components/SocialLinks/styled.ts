import styled from 'styled-components'
import { StyledA } from '../../styled/StyledLink/styled'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	width: 90%;

	@media (max-width: ${MediaQueries.Ipad}) {
		margin: 0.7rem 0;
	}
`

export const Icon = styled(StyledA)`
	display: flex;
	width: 2.5rem;
	height: 2.5rem;
	padding: 0.5rem;
	margin: 0 1rem 0.5rem 1rem;
	border-radius: 50%;
	color: ${({ theme }) => theme.text.colorful.basicColor};
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};

	&:hover {
		box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
			-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite},
			5px 5px 5px ${({ theme }) => theme.bg.shadowBlack} inset,
			-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite} inset;
	}
`
