import styled, { css } from 'styled-components'
import { StyledLink } from '../../../styled/StyledLink/styled'
import { MediaQueries } from '../../../themes'
import { getAnimationOpen } from './function'

const sizeNav = css`
	display: flex;
	width: 100%;
	height: 4rem;
	justify-content: flex-end;
`

export const Wrapper = styled.nav`
	${sizeNav};
	padding: 0 1.5rem 0 0;
`

export const NavContent = styled.ul<{ open: boolean }>`
	${sizeNav};
	align-items: center;

	@media (max-width: ${MediaQueries.Ipad}) {
		display: ${({ open }) => (open ? 'flex' : 'none')};
		height: 93vh;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
		position: absolute;
		padding-right: 1.5rem;
		background-color: ${({ theme }) => `${theme.bg.shadowBlack}B3`};
		top: 4rem;
		right: 0;
		z-index: 998;

		& > li {
			${({ open }) => open && getAnimationOpen()};
		}
	}
`

export const NavItem = styled.li`
	padding: 0 0.7rem;

	@media (max-width: ${MediaQueries.Ipad}) {
		padding: 0.5rem 0.7rem;
		opacity: 0;
	}
`

export const NavLink = styled(StyledLink)<{ active: boolean }>`
	font-size: 1rem;
	font-weight: 400;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}

	${({ active, theme }) =>
		active &&
		`
			color: ${theme.text.colorful.basicColor};
		`}
`

export const Burger = styled.button<{ open: boolean }>`
	display: none;

	@media (max-width: ${MediaQueries.Ipad}) {
		display: flex;
		height: 4rem;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;

		& > div {
			width: 1.8rem;
			height: 0.15rem;
			margin: 0.2rem;
			background-color: ${({ theme }) => theme.text.primary};
			border-radius: 1rem;
			transform-origin: 1px;
			transition: all 0.4s ease;

			&:nth-child(1) {
				transform: ${({ open }) =>
					open ? 'rotate(41deg)' : 'rotate(0)'};
				background-color: ${({ open }) =>
					open
						? ({ theme }) => theme.text.colorful.basicColor
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
						? ({ theme }) => theme.text.colorful.basicColor
						: ({ theme }) => theme.text.primary};
			}
		}
	}
`
