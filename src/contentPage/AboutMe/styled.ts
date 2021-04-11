import styled from 'styled-components'
import { MediaQueries } from 'themes'

export const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-bottom: 1rem;
`

export const SmallText = styled.span`
	font-size: 1.3rem;
	font-weight: 300;
`

export const PersonalInfo1 = styled.ul`
	width: 100%;
	justify-self: center;
	margin: 0.5rem 0;

	&:nth-child(1) {
		margin-left: 1.5rem;
		width: 90%;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		width: 95%;
	}
`

export const Name = styled.li`
	font-size: 1rem;
	color: ${({ theme }) => theme.text.primary};
	padding-bottom: 1rem;
`

export const Text = styled.span`
	display: block;
	color: ${({ theme }) => theme.text.grey};
	filter: brightness(70%);

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		font-size: 0.8rem;
	}
`

export const WrapperLinks = styled.div`
	display: flex;
	width: 85%;
	justify-content: space-around;

	@media (max-width: ${MediaQueries.Desktop}) {
		width: 90%;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		flex-direction: column;
		align-items: center;

		button {
			margin: 0.5rem;
		}
	}
`
