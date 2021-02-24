import styled from 'styled-components'
import {Settings} from '@styled-icons/feather'

export const Wrapper = styled.section`
    width: 14em;
    height: 15em;
    position: relative;
`

export const Content = styled.article`
    width: 11em;
    height: 15em;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    box-shadow: 0.1em 0.1em 0.1em ${({theme}) => theme.bg.shadowBlack},
                -0.1em -0.1em 0.1em ${({theme}) => theme.bg.shadowWhite};
`

export const BoxShadowInset = styled.div`
    width: 5em;
    height: 3em; 
    position: absolute;
    top: 1.4em;
    right: 0;
    border-radius: 1em;
    box-shadow: 0.1em 0.1em 0.1em ${({theme}) => theme.bg.shadowBlack} inset,
                -0.1em -0.1em 0.1em ${({theme}) => theme.bg.shadowWhite} inset;
`

export const HiddenBox = styled.article`
    width: 3em;
    height: 3em;
    float: right;
    background-color: ${({theme}) => theme.bg.primary};
`

export const Icon = styled.article`
    width: 4.6em;
    height: 2.2em;
    position: absolute;
    right: 0;
    top: 0.42em;
    border-radius: 0.7em;
    background-color: ${({theme}) => theme.bg.primary};
    box-shadow: 0.1em 0.1em 0.1em ${({theme}) => theme.bg.shadowBlack},
                -0.1em -0.1em 0.1em ${({theme}) => theme.bg.shadowWhite};
`

export const SettingsIcon = styled(Settings)`
    width: 1.4em;
    height: 1.4em;
    position: absolute;
    top: 0.4em;
    right: 0.6em;
`