import styled from 'styled-components'

export const BlockAnchors = styled.section`
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	margin-bottom: 2rem;
	padding: 1rem;
	border-radius: 1rem;
	justify-content: space-around;
	box-shadow: 1.5px 1.5px 1.5px ${({ theme }) => theme.bg.shadowBlack},
		-1.5px -1.5px 1.5px ${({ theme }) => theme.bg.shadowWhite};

	a {
		margin: 0.2rem;
		padding: 0.4rem 1rem;
		border-radius: 1rem;
		font-size: 0.9rem;
		font-weight: 300;

		&:hover {
			color: ${({ theme }) => theme.text.colorful.basicColor};
			box-shadow: 1.5px 1.5px 1.5px ${({ theme }) => theme.bg.shadowBlack}
					inset,
				-1.5px -1.5px 1.5px ${({ theme }) => theme.bg.shadowWhite} inset;
		}
	}

	h6 {
		margin: 0.5rem 0 1rem 1rem;
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}
`
