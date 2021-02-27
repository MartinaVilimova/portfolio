import styled, { css } from 'styled-components'
import { MediaQueries } from '../../themes'

const sizeNav = css`
	width: 100%;
	height: 4em;
`

export const Wrapper = styled.header`
	${sizeNav};
	margin-bottom: 1em;
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
		shadow
			? ({ theme }) => `0.5em 0em 0.5em ${theme.bg.shadowBlack}`
			: 'none'};
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
	padding: 0 0 0 1.5em;
`

export const Logo = styled.span`
	margin: 0;
	font-size: 1.5em;
	font-weight: 400;
	letter-spacing: 1px;

	& a {
		text-decoration: none;
		color: ${({ theme }) => theme.text.primary};
	}
`
