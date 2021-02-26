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
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
		position: absolute;
		padding-right: 1.5em;
		background-color: ${({ theme }) => theme.bg.shadowBlack}B3;
		height: 93vh;
		top: 4em;
		right: 0;
		z-index: 998;
	}
`
const animationItem = (item: number) => {
    
    return `
    &:nth-child(${item+1}) {
      animation: movedY 1s ease forwards;
      animation-delay: ${item * 0.3}s;
      @keyframes movedY {
				0% {
					opacity: 0;
					transform: translateY(0);
				}
				100% {
					opacity: 1;
					transform: translateY(1em);
				}
			}
    }
    `
}

const getAnimation = () => {
  let str = ''
  for ( let i = 0; i < 5; i += 1) {
	  str += animationItem(i)
	}
    return str
}

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

	@media (max-width: 50em) {
		padding: 0.5em 0.7em;
		opacity: 0;
		${getAnimation()};
	}
`
