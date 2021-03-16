import styled from 'styled-components'

export const BlockAnchors = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 90%;
	margin-bottom: 2em;
	padding: 1em;
	border-radius: 1em;
	justify-content: space-around;
	box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack},
		-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite};

	& a {
		cursor: pointer;
		margin: 0.2em;
		padding: 0.4em 1em;
		border-radius: 1em;
		font-size: 0.9em;
		font-weight: 300;

		&:hover {
			color: ${({ theme }) => theme.text.colorful.basicColor};
			box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack}
					inset,
				-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite} inset;
		}
	}

	& h6 {
		margin-left: 1em;
		color: ${({ theme }) => theme.text.colorful.basicColor};
	}
`
