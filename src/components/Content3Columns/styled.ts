import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
    display: grid;
    background-color: pink;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${MediaQueries.Desktop}) {
        grid-template-columns: 1fr 1fr;
	}

    @media (max-width: ${MediaQueries.Ipad}) {
        grid-template-columns: 1fr;
	}
`
