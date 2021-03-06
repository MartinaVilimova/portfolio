import styled from 'styled-components'

export const Wrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 1.5em 0;
`

export const Page = styled.div`
	display: flex;
	width: 2.5em;
	height: 2.5em;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	margin: 0 0.2em;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		color: ${({ theme }) => theme.text.colorful};
		box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack}
				inset,
			-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite} inset;
	}
`

export const PageArrow = styled(Page)`
	box-sizing: border-box;
	padding: 0.4em;
	color: ${({ theme }) => theme.text.colorful};
`
