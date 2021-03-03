import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Paragraph = styled.p`
	width: 90%;
	font-size: 1em;
	padding-bottom: 0.7em;
	color: ${({ theme }) => theme.text.grey};

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 95%;
	}
`
