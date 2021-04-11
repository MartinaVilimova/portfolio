import styled, { css } from 'styled-components'
import { MediaQueries } from 'themes'

const sizeNav = css`
	width: 100%;
	height: 4rem;
`

export const Wrapper = styled.header`
	${sizeNav};
	margin-bottom: 1rem;
`

export const FixedNavBar = styled.div<{ shadow: boolean }>`
	${sizeNav};
	display: grid;
	grid-template-columns: 1fr 3fr;
	position: fixed;
	top: 0;
	z-index: 999;
	background-color: ${({ theme }) => theme.bg.primary};
	box-shadow: ${({ shadow }) =>
		shadow ? ({ theme }) => `8px 0 8px ${theme.bg.shadowBlack}` : 'none'};
	transition: box-shadow 0.5s ease;

	@media (max-width: ${MediaQueries.Ipad}) {
		grid-template-columns: 1fr 1fr;
	}
`

export const LogoBox = styled.section`
	${sizeNav};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 0 0 1.5rem;
`

export const Logo = styled.a`
	margin: 0;
	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.text.primary};
`
