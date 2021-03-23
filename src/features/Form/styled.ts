import styled, { css } from 'styled-components'
import { Button } from '../../components/Button/styled'

const sameStyle = css`
	display: flex;
	flex-direction: column;
`

export const Form = styled.form`
	${sameStyle};
	width: 90%;

	${Button} {
		width: 9rem;
		margin: auto;
		margin-bottom: 1.5rem;
	}
`

export const FormItem = styled.article`
	${sameStyle};
	padding: 0 0 2rem 0;
	margin: 0.1rem;
`

export const FormLabel = styled.label`
	padding-left: 1.1rem;
	color: ${({ theme }) => theme.text.primary};
`

const formItem = css`
	outline: none;
	border: none;
	font-family: 'Poppins', sans-serif;
	font-size: 1rem;
	color: ${({ theme }) => theme.text.colorful.basicColor};
	padding: 0.6rem 1.3rem;
	border-radius: 1rem;
	margin-top: 0.4rem;
	background-color: ${({ theme }) => theme.bg.primary};
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack} inset,
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite} inset;

	&::placeholder {
		color: ${({ theme }) => theme.text.grey};
		font-weight: 300;
	}

	&:-webkit-autofill {
		box-shadow: 0 0 0 30px
			${({ theme }) => `${theme.text.colorful.basicColor}B3`} inset;
	}
`

export const FormInput = styled.input`
	${formItem};
`

export const FormTextArea = styled.textarea`
	${formItem};
	height: 9rem;
	resize: none;
`

export const ErrorMessage = styled.p`
	display: flex;
	justify-content: center;
	margin: auto;
	min-width: 30%;
	padding: 0.5rem 1.5rem;
	border-radius: 0.7rem;
	color: ${({ theme }) => theme.text.warning};
	border: 1px solid ${({ theme }) => theme.text.warning};
	background-color: ${({ theme }) => theme.bg.primary};
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};
	position: relative;
	top: 1rem;

	&:before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		bottom: 100%;
		left: 1.5rem;
		border: 0.7rem solid transparent;
		border-top: none;
		border-bottom-color: ${({ theme }) => theme.text.warning};
		filter: drop-shadow(0 -2px 2px ${({ theme }) => theme.bg.shadowWhite});
	}
`
