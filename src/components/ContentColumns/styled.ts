import styled from 'styled-components'
import { NumberColumns } from '.'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section<{
	quantity: NumberColumns
	quantityIpad: NumberColumns
}>`
	display: grid;
	width: 100%;
	grid-template-columns: ${({ quantity }) => quantity};

	@media (max-width: ${MediaQueries.Desktop}) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		grid-template-columns: ${({ quantityIpad }) => quantityIpad};
	}
`
