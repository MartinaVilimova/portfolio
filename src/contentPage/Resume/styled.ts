import styled, { css } from 'styled-components'

const sameStyle = css`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Article = styled.article`
	${sameStyle};
	width: 100%;
	margin-bottom: 2rem;
`

export const WrapperItems = styled.div`
	${sameStyle};
	justify-content: flex-start;
	width: 95%;
	padding-top: 1rem;
	border-radius: 1.5rem;
	box-shadow: 5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};
`
