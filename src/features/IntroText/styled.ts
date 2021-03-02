import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding-right: 2em;

	@media (max-width: ${MediaQueries.Ipad}) {
		order: 2;
		text-align: center;
		padding-right: 0;
	}
`

export const Subtitle = styled.p`
	color: #8b9299;
	padding-bottom: 0.7em;
`
