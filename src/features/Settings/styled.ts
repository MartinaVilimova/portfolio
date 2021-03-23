import styled, { css } from 'styled-components'
import { Settings } from '@styled-icons/feather'
import { chooseColors, Color } from '../../themes'

export const Wrapper = styled.section<{ click: boolean }>`
	width: 14rem;
	height: 16rem;
	position: fixed;
	z-index: 998;
	top: 5rem;
	left: -11.7rem;
	transform: ${({ click }) =>
		click ? 'translateX(0)' : 'translateX(11.7rem)'};
	transition: transform 2s ease;
`

const sameShadow = css`
	box-shadow: 1.5px 1.5px 1.5px ${({ theme }) => theme.bg.shadowBlack},
		-1.5px -1.5px 1.5px ${({ theme }) => theme.bg.shadowWhite};
`

const sameFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Content = styled.article`
	${sameShadow};
	${sameFlex};
	flex-direction: column;
	width: 11rem;
	height: 16rem;
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
	background-color: ${({ theme }) => theme.bg.primary};
`

export const Title = styled.span`
	font-size: 0.9rem;
	padding: 0.6rem 0;
`

export const Colors = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 7.5rem;
	height: 2.5rem;
`

export const Switcher = styled.button`
	${sameFlex};
	height: 1.7rem;
	width: 1.7rem;
	border-radius: 50%;
	opacity: 0.9;

	&:nth-child(1) {
		background-color: ${chooseColors[Color.Green].basicColor};
		box-shadow: 2px 2px 4px ${chooseColors[Color.Green].lightColor} inset,
			-2px -2px 4px ${chooseColors[Color.Green].darkColor} inset,
			5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
			-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};
	}

	&:nth-child(2) {
		background-color: ${chooseColors[Color.Pink].basicColor};
		box-shadow: 2px 2px 4px ${chooseColors[Color.Pink].lightColor} inset,
			-2px -2px 4px ${chooseColors[Color.Pink].darkColor} inset,
			5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
			-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};
	}

	&:nth-child(3) {
		background-color: ${chooseColors[Color.Blue].basicColor};
		box-shadow: 2px 2px 4px ${chooseColors[Color.Blue].lightColor} inset,
			-2px -2px 4px ${chooseColors[Color.Blue].darkColor} inset,
			5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
			-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};
	}

	svg {
		color: ${({ theme }) => theme.bg.primary};
	}
`

export const Line = styled.hr`
	border: none;
	width: 90%;
	height: 1px;
	background: linear-gradient(
		270deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(47, 185, 158, 1) 50%,
		rgba(255, 255, 255, 0) 100%
	);
`

export const ShadowInsetBox = styled.div`
	width: 5rem;
	height: 3rem;
	position: absolute;
	top: 1.4rem;
	right: 0;
	border-radius: 1.2rem;
	box-shadow: 2px 2px 2px ${({ theme }) => theme.bg.shadowBlack} inset,
		-2px -2px 2px ${({ theme }) => theme.bg.shadowWhite} inset;
`

export const HiddenBox = styled.div`
	width: 3rem;
	height: 3rem;
	float: right;
	background-color: ${({ theme }) => theme.bg.primary};
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
`

export const IconBox = styled.article`
	${sameShadow};
	display: flex;
	justify-content: space-between;
	width: 4.6rem;
	height: 2.3rem;
	padding: 0.4rem;
	position: absolute;
	right: 0;
	top: 0.39rem;
	border-radius: 0.9rem;
	cursor: pointer;
	color: ${({ theme }) => theme.text.grey};
	background-color: ${({ theme }) => theme.bg.primary};

	&:hover {
		svg:nth-child(1) {
			color: ${({ theme }) => theme.text.primary};
		}
	}
`

export const SettingsIcon = styled(Settings)<{ click: boolean }>`
	animation: rotation 8s infinite linear;
	color: ${({ click }) =>
		click
			? ({ theme }) => theme.text.primary
			: ({ theme }) => theme.text.colorful.basicColor};

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}

	@keyframes rotation {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
