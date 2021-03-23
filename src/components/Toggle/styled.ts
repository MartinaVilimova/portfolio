import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
	display: inline-flex;
	align-items: center;
`

const iconCss = css`
	width: 1.5rem;
	margin: 0 0.5rem;
`

export const IconSun = styled.a<{ light: boolean }>`
	${iconCss};
	color: ${({ light }) =>
		light
			? ({ theme }) => theme.text.grey
			: ({ theme }) => theme.text.colorful.basicColor};
`

export const IconMoon = styled.a<{ light: boolean }>`
	${iconCss};
	transform: rotate(250deg);
	color: ${({ light }) =>
		light
			? ({ theme }) => theme.text.colorful.basicColor
			: ({ theme }) => theme.text.grey};
`

export const Switch = styled.label`
	position: relative;
	display: inline-flex;
	width: 3.75rem;
	height: 2.13rem;
`

const sameShadow = css`
	background-color: ${({ theme }) => theme.bg.primary};
	border: 1px solid ${({ theme }) => theme.bg.primary};
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack} inset,
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite} inset;
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
	border-radius: 2.13rem;

	&:before {
		position: absolute;
		content: '';
		height: 1.5rem;
		width: 1.5rem;
		left: 0.3rem;
		bottom: 0.26rem;
		background: radial-gradient(
			circle at 10px 10px,
			${({ theme }) => theme.text.colorful.basicColor},
			${({ theme }) => theme.bg.shadowBlack}
		);
		box-shadow: 1.5px 1.5px 1.5px ${({ theme }) => theme.bg.shadowBlack},
			-1.5px -1.5px 1.5px ${({ theme }) => theme.bg.shadowWhite};
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
		transform: translateX(1.6rem);
	}
`
