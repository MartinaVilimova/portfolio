import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section<{visible: boolean}>`
	display: ${({visible}) => visible ? 'flex' : 'none'};
    width: 3em;
    height: 3em;
	position: fixed;
	padding: 0 1em 0.5em 0;
	bottom: 3em;
	right: 0;
    background-color: red;

	@media (max-width: ${MediaQueries.Ipad}) {
	}
`
