import styled from 'styled-components'
import { MediaQueries, Theme } from '../../themes'

export const HoverBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        background-color: ${({ theme }) => theme.bg.shadowBlack}00; 
        border-radius: 1.4em;
        transform: scale(0);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all 0.5s ease;
`

export const Wrapper = styled.article`
    box-sizing: border-box;
    display: flex;
    margin: 1em;
    justify-self: center;
    justify-content: center;
    border-radius: 1.6em;
    background-color: ${({theme}) => theme.bg.primary};
    border: 0.3em solid ${({theme}) => theme.bg.primary};
    width: 90%;
    height: auto;
    position: relative;
    box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};

    @media (max-width: ${MediaQueries.Desktop}) {
		width: 80%;
    }

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 70%;
    }

    @media (max-width: ${MediaQueries.SmallerIpad}) {
		width: 100%;
    }

    &:hover {
        & ${HoverBox} {
            background-color: ${({ theme }) => theme.bg.shadowBlack}E6;
            transform: scale(1);
            transition: all 0.5s ease;
        }
    }

`

export const Picture = styled.img`
    width: 100%;
    border-radius: 1.5em;
`

export const IconButton = styled.div`
    box-sizing: border-box;
    display: flex;
	justify-content: center;
	align-items: center;
    position: relative;
	width: 2.3em;
	height: 2.3em;
	padding: 0.5em;
    margin: 0.5em;
	border-radius: 50%;
	color: ${({ theme }) => theme.text.primary};
	background: radial-gradient(circle, ${({ theme }) => theme.text.colorful} 45%, transparent 100%),
				linear-gradient(132deg, ${({ theme }) => theme.bg.shadowWhite} 40%, transparent 100%), 
				linear-gradient(322deg, ${({ theme }) => theme.bg.black} 20%, transparent 100%);
	cursor: pointer;
    filter: drop-shadow(0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack})
		drop-shadow(
			-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite}80
		);

    &:hover {
        color: ${({ theme }) => theme.bg.primary};
    }

`

export const Subtitle = styled.span`
    width: 100%;
    font-size: 1.3em;
    font-weight: 500;
    color: ${({ theme }) => theme.text.colorful};
    text-align: center;
    position: relative;
    top: -3.5em;
`