import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
	display: flex;
	width: 100%;
	height: 90vh;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	button {
		margin-top: 2rem;
	}
`

export const Photo = styled.img`
	width: 40rem;
	margin-bottom: 2rem;

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 28rem;
		margin-top: 4rem;
	}

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		width: 18rem;
	}
`
