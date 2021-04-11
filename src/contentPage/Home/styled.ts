import styled from 'styled-components'
import { MediaQueries } from 'themes'

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;

	a {
		width: 12.3rem;
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		order: 2;
		text-align: center;
		align-items: center;
	}
`
