import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
	background-color: green;
`

export const BigTitle = styled.div`
	background-color: pink;
    font-size: 3.5em; 
    font-weight: 800;
    text-align: center;
    color: ${({theme}) => theme.text.grey};
    position: relative;
    top: 0.3em;
`
