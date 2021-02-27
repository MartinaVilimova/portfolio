import styled, { css } from 'styled-components'
import { MediaQueries } from '../../themes'
import { getAnimationOpen } from './function'

const sizeNav = css`
	width: 100%;
	height: 4em;
`

export const Wrapper = styled.nav`
	${sizeNav};
	box-sizing: border-box;
	padding: 0 1.5em 0 0;
`

export const NavContent = styled.ul<{ open: boolean }>`
	${sizeNav};
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;

	@media (max-width: ${MediaQueries.Ipad}) {
		display: ${({ open }) => (open ? 'flex' : 'none')};
		height: 93vh;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
		position: absolute;
		padding-right: 1.5em;
		background-color: ${({ theme }) => `${theme.bg.shadowBlack}B3`};
		top: 4em;
		right: 0;
		z-index: 998;

		& > li {
			${({ open }) => open && getAnimationOpen()};
		}
	}
`

export const NavItem = styled.li`
	padding: 0 0.7em;

	& a {
		text-decoration: none;
		font-size: 1em;
		font-weight: 400;
		letter-spacing: 1px;
		color: ${({ theme }) => theme.text.primary};

		&:hover {
			color: ${({ theme }) => theme.text.colorful};
		}
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		padding: 0.5em 0.7em;
		opacity: 0;
	}
`

export const Burger = styled.section<{ open: boolean }>`
	display: none;

	@media (max-width: ${MediaQueries.Ipad}) {
		display: flex;
		height: 4em;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;

		& > div {
			width: 1.8em;
			height: 0.15em;
			margin: 0.2em;
			background-color: ${({ theme }) => theme.text.primary};
			border-radius: 1em;
			transform-origin: 1px;
			transition: all 0.4s ease;

			&:nth-child(1) {
				transform: ${({ open }) =>
					open ? 'rotate(41deg)' : 'rotate(0)'};
				background-color: ${({ open }) =>
					open
						? ({ theme }) => theme.text.colorful
						: ({ theme }) => theme.text.primary};
			}

			&:nth-child(2) {
				opacity: ${({ open }) => (open ? '0' : '1')};
			}

			&:nth-child(3) {
				transform: ${({ open }) =>
					open ? 'rotate(-41deg)' : 'rotate(0)'};
				background-color: ${({ open }) =>
					open
						? ({ theme }) => theme.text.colorful
						: ({ theme }) => theme.text.primary};
			}
		}
	}
`
