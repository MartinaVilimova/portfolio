import styled from 'styled-components'
import { StyledA } from 'styled/StyledLink/styled'
import { MediaQueries } from 'themes'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 3.5rem;
	position: fixed;
	bottom: 1rem;
	z-index: 997;

	@media (max-width: ${MediaQueries.Ipad}) {
		display: none;
	}
`

export const VerticalText = styled.p`
	color: ${({ theme }) => theme.text.primary};
	writing-mode: vertical-rl;
	text-orientation: upright;
	font-size: 0.9rem;
	width: 1.5rem;
`

export const Line = styled.div`
	background-color: ${({ theme }) => theme.text.colorful.basicColor};
	width: 0.1rem;
	height: 3rem;
	margin: 1rem 0;
`

export const Icon = styled(StyledA)`
	display: flex;
	width: 1.9rem;
	height: 1.9rem;
	padding: 0.4rem;
	margin: 0.2rem;
	border-radius: 50%;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
		box-shadow: 2px 2px 2px ${({ theme }) => theme.bg.shadowBlack} inset,
			-2px -2px 2px ${({ theme }) => theme.bg.shadowWhite} inset;
	}
`
