import styled, { css } from 'styled-components'
import { Settings } from '@styled-icons/feather'

export const Wrapper = styled.section<{ click: boolean }>`
	width: 14em;
	height: 15em;
	position: relative;
	left: -11.7em;
	transform: ${({ click }) =>
		click ? 'translateX(0)' : 'translateX(11.7em)'};
	transition: transform 2s ease;
`

const SameShadow = css`
	box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack},
		-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite};
`

export const Content = styled.article`
	${SameShadow};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 11em;
	height: 15em;
	border-top-right-radius: 1em;
	border-bottom-right-radius: 1em;
`

export const Title = styled.span`
	font-size: 0.7em;
	padding: 0.6em 0;
`

export const Colors = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 7em;
	height: 2.5em;

	& div:nth-child(1) {
		background-color: ${({ theme }) => theme.text.colorful};
		background: radial-gradient(
			circle at 10px 10px,
			${({ theme }) => theme.text.colorful},
			${({ theme }) => theme.bg.primary}
		);
	}

	& div:nth-child(2) {
		background-color: #fe668e;
		background: radial-gradient(
			circle at 10px 10px,
			#fe668e,
			${({ theme }) => theme.bg.shadowBlack}
		);
	}

	& div:nth-child(3) {
		background-color: #0fcae8;
		background: radial-gradient(
			circle at 10px 10px,
			#0fcae8,
			${({ theme }) => theme.bg.shadowBlack}
		);
	}
`

export const Line = styled.hr`
	background: linear-gradient(
		270deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(47, 185, 158, 1) 50%,
		rgba(255, 255, 255, 0) 100%
	);
	border: none;
	width: 90%;
	height: 1px;
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
	cursor: pointer;
	color: ${({ click }) =>
		click
			? ({ theme }) => theme.text.grey
			: ({ theme }) => theme.text.colorful};

	&:hover {
		color: ${({ theme }) => theme.text.colorful};
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
