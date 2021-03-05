import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
    box-sizing: border-box;
    background-color: green;
    display: flex;
    margin: 1em;
    justify-content: center;
    border-radius: 1.6em;
    background-color: ${({theme}) => theme.bg.primary};
    border: 0.3em solid ${({theme}) => theme.bg.primary};
    width: 10em;
    height: 10em;
    position: relative;

    @media (max-width: ${MediaQueries.Desktop}) {
		width: 80%;
        height: 90%;
    }
	

`

export const Picture = styled.img`
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: 1.5em;
    position: absolute;
`