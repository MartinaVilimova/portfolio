import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 1fr 1fr;

	@media (max-width: ${MediaQueries.Ipad}) {
		grid-template-columns: 1fr;
	}
`
