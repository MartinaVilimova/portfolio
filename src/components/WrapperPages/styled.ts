import styled from 'styled-components'
import { UnitsData } from '.'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.main<{ value: UnitsData }>`
	display: flex;
	flex-direction: column;
	margin: auto;
	justify-content: center;
	align-items: center;
	max-width: 60%;
	height: ${({ value }) => value};
	padding-left: 3rem;

	@media (max-width: ${MediaQueries.Desktop}) {
		max-width: 80%;
		height: ${({ value }) => value};
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		max-width: 90%;
		height: 100%;
		padding-left: 0;
		margin-bottom: 1rem;
	}
`
