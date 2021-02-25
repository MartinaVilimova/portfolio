import styled, { css } from 'styled-components'

const sizeNav = css`
	width: 100%;
	height: 4em;
`

export const Wrapper = styled.nav`
	${sizeNav};
	box-sizing: border-box;
	padding: 0 1.5em 0 0;
`

export const NavContent = styled.ul`
	${sizeNav};
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;

	@media (max-width: 50em) {
		display: none;
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
`
