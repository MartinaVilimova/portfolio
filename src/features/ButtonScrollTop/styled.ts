import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.section<{ visible: boolean }>`
	display: ${({ visible }) => (visible ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	width: 2em;
	height: 2em;
	position: fixed;
	padding: 0.5em;
	bottom: 4.5em;
	right: 2em;
	border-radius: 50%;
	color: ${({ theme }) => theme.bg.primary};
	background-color: ${({ theme }) => theme.text.colorful.basicColor};
	box-shadow: 0.2em 0.2em 0.3em
			${({ theme }) => theme.text.colorful.lightColor} inset,
		-0.2em -0.2em 0.3em ${({ theme }) => theme.text.colorful.darkColor}
			inset,
		0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.text.primary};
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		display: none;
	}
`
