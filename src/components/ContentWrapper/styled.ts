import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	margin: auto;
	justify-content: center;
	align-items: center;
	max-width: 60%;
	height: 90vh;
	padding-left: 3em;

	@media (max-width: ${MediaQueries.Desktop}) {
		max-width: 80%;
		height: 90vh;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 90%;
		height: 100%;
		padding-left: 0;
		margin-bottom: 3em;
	}
`
