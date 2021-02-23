import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
	display: inline-flex;
	align-items: center;
`

const iconCss = css`
	width: 1.5em;
	margin: 0 0.5em;
	cursor: pointer;
`

export const IconSun = styled.div<{ light: boolean }>`
	${iconCss};
	color: ${({ light }) =>
		light
			? ({ theme }) => theme.text.grey
			: ({ theme }) => theme.text.green};
`

export const IconMoon = styled.div<{ light: boolean }>`
	${iconCss};
	transform: rotate(250deg);
	color: ${({ light }) =>
		light
			? ({ theme }) => theme.text.green
			: ({ theme }) => theme.text.grey};
`

export const Switch = styled.label`
	position: relative;
	display: inline-flex;
	width: 60px;
	height: 34px;
`

const sameShadow = css`
	background-color: ${({ theme }) => theme.bg.primary};
	border: 1px solid ${({ theme }) => theme.bg.primary};
	box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack} inset,
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite} inset;
`

export const RoundSlider = styled.span`
	${sameShadow};
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: 0.4s;
	border-radius: 34px;

	&:before {
		position: absolute;
		content: '';
		height: 24px;
		width: 24px;
		left: 5px;
		bottom: 4px;
		background: radial-gradient(
			circle at 10px 10px,
			${({ theme }) => theme.text.green},
			${({ theme }) => theme.bg.shadowBlack}
		);
		box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack},
			-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite};
		transition: 0.4s;
		border-radius: 50%;
	}
`

export const Checkbox = styled.input.attrs((props) => ({
	type: 'checkbox',
	checked: props.checked,
	onChange: props.onChange,
}))`
	opacity: 0;
	width: 0;
	height: 0;

	&:checked + ${RoundSlider} {
		${sameShadow};
	}

	&:checked + ${RoundSlider}:before {
		transform: translateX(25px);
	}
`
