import styled from 'styled-components'

export const Wrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 1.5rem 0;
`

export const Page = styled.div`
	display: flex;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	justify-content: center;
	align-items: center;
	margin: 0 0.2rem;
	color: ${({ theme }) => theme.text.primary};

	&:hover {
		color: ${({ theme }) => theme.text.colorful.basicColor};
		box-shadow: 1.5px 1.5px 1.5px ${({ theme }) => theme.bg.shadowBlack}
				inset,
			-1.5px -1.5px 1.5px ${({ theme }) => theme.bg.shadowWhite} inset;
	}
`

export const PageArrow = styled(Page)`
	padding: 0.4rem;
	color: ${({ theme }) => theme.text.colorful.basicColor};
`
