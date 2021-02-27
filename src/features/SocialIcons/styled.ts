import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3.5em;
    position: absolute;
    bottom: 1em;
    z-index: 997;
`

export const VerticalText = styled.p`
    color: ${({theme}) => theme.text.primary};
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 0.7em;
`

export const Line = styled.div`
    background-color: ${({theme}) => theme.text.green};
    width: 0.1em;
    height: 3em;
    margin: 1em 0;
`

export const Icon = styled(Link)`
    display: flex;
    box-sizing: border-box;
    width: 1.7em;
    height: 1.7em;
    padding: 0.3em;
    margin: 0.2em;
    border-radius: 50%;
    color: ${({theme}) => theme.text.primary};

    &:hover {
        color: ${({theme}) => theme.text.green};
        box-shadow: 0.1em 0.1em 0.1em ${({theme}) => theme.bg.shadowBlack} inset,
                    -0.1em -0.1em 0.1em ${({theme}) => theme.bg.shadowWhite} inset;
    }
    
`