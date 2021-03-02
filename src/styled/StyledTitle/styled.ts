import styled from 'styled-components'

export const StyledH1 = styled.h1`
    font-weight: 500;
    font-size: 2.5rem;
    letter-spacing: 0.5px;
	padding-bottom: 0.7em;
`

export const StyledH2 = styled.h2`
    font-weight: 900;
    font-size: 2rem;
    color: ${({theme}) => theme.text.colorful};
    text-align: center;
    margin: 0;
    position: relative;
    top: -0.9em;
`

export const StyledH4 = styled.h4`
    font-weight: 300;
    font-size: 1.5rem;
    padding-bottom: 0.5em;
`