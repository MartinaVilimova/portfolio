import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Text = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	margin: 2rem 0;

	@media (max-width: ${MediaQueries.Ipad}) {
		flex-direction: column;
	}
`
