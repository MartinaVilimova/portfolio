import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
	box-sizing: border-box;

	@media (max-width: ${MediaQueries.Ipad}) {
		order: 2;
		text-align: center;
		align-items: center;
	}

	& a {
		width: 12.3em;
		& button {
			margin: auto;
		}
	}
`
