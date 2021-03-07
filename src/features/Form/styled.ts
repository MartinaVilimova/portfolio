import styled, { css } from 'styled-components'
import { Button } from '../../components/Button/styled'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 90%;

	& ${Button} {
		width: 9em;
		margin: auto;
	}
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
	color: ${({ theme }) => theme.text.colorful};
	padding: 0.6em 1.3em;
	border-radius: 1em;
	margin: 0.5em 0 1.8em 0;
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
		box-shadow: 0 0 0 30px ${({ theme }) => theme.text.colorful} inset !important;
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
