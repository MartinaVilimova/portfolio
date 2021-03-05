import styled from 'styled-components'

export const Article = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-bottom: 2em;
`

export const WrapperItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 95%;
	padding-top: 1em;
	border-radius: 1.5em;
	box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};
`
