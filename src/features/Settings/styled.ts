import styled, { css } from 'styled-components'
import { Settings } from '@styled-icons/feather'

export const Wrapper = styled.section<{ click: boolean }>`
	width: 14em;
	height: 15em;
	position: relative;
	left: -11.5em;
	transform: ${({ click }) =>
		click ? 'translateX(0)' : 'translateX(11.5em)'};
	transition: transform 2s ease;
`

const SameShadow = css`
	box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack},
		-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite};
`

export const Content = styled.article`
	${SameShadow};
	display: flex;
	justify-content: center;
	width: 11em;
	height: 15em;
	border-top-right-radius: 1em;
	border-bottom-right-radius: 1em;
`

export const ShadowInsetBox = styled.div`
	width: 5em;
	height: 3em;
	position: absolute;
	top: 1.4em;
	right: 0;
	border-radius: 1em;
	box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack} inset,
		-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite} inset;
`

export const HiddenBox = styled.article`
	width: 3em;
	height: 3em;
	float: right;
	background-color: ${({ theme }) => theme.bg.primary};
`

export const IconBox = styled.article`
	${SameShadow};
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	width: 4.6em;
	height: 2.2em;
	padding: 0.4em;
	position: absolute;
	right: 0;
	top: 0.42em;
	border-radius: 0.7em;
	color: ${({ theme }) => theme.text.grey};
	background-color: ${({ theme }) => theme.bg.primary};
`

export const SettingsIcon = styled(Settings)<{ click: boolean }>`
	animation: rotation 8s infinite linear;
	color: ${({ click }) =>
		click
			? ({ theme }) => theme.text.grey
			: ({ theme }) => theme.text.green};

	&:hover {
		color: ${({ theme }) => theme.text.green};
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
