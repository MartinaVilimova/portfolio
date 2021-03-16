import styled, { css } from 'styled-components'
import { Button } from '../../components/Button/styled'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 90%;

	& ${Button} {
		width: 9em;
		margin: auto;
		margin-bottom: 1.5em;
	}
`

export const FormItem = styled.article`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0 0 2em 0;
	margin: 0.1em;
`

export const FormLabel = styled.label`
	width: 100%;
	padding-left: 1.1em;
	color: ${({ theme }) => theme.text.primary};
`

const formItem = css`
	outline: none;
	border: none;
	font-family: 'Poppins', sans-serif;
	font-size: 1em;
	color: ${({ theme }) => theme.text.colorful.basicColor};
	padding: 0.6em 1.3em;
	border-radius: 1em;
	margin-top: 0.4em;
	background-color: ${({ theme }) => theme.bg.primary};
	box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack} inset,
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite} inset;

	&::placeholder {
		color: ${({ theme }) => theme.text.grey};
		font-weight: 300;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
		box-shadow: 0 0 0 30px
			${({ theme }) => theme.text.colorful.basicColor}B3 inset !important;
	}
`

export const FormInput = styled.input`
	${formItem};
`

export const FormTextArea = styled.textarea`
	${formItem};
	height: 9em;
	resize: none;
`

export const ErrorMessage = styled.p`
	display: flex;
	justify-content: center;
	margin: auto;
	min-width: 30%;
	padding: 0.5em 1.5em;
	border-radius: 0.7em;
	color: ${({ theme }) => theme.text.warning};
	border: 1px solid ${({ theme }) => theme.text.warning};
	background-color: ${({ theme }) => theme.bg.primary};
	box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};
	position: relative;
	top: 1em;

	&:before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		bottom: 100%;
		left: 1.5em;
		border: 0.7em solid transparent;
		border-top: none;
		border-bottom-color: ${({ theme }) => theme.text.warning};
		filter: drop-shadow(
			0 -0.15em 0.15em ${({ theme }) => theme.bg.shadowWhite}
		);
	}
`
