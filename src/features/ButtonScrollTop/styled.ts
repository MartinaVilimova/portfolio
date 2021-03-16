import styled from 'styled-components'
import { MediaQueries, Theme } from '../../themes'

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
	background: ${({ theme }) =>
		theme.selectedTheme === Theme.Light
			? `radial-gradient(circle, ${theme.text.colorful} 45%, transparent 100%),
				linear-gradient(132deg, ${theme.bg.shadowWhite} 40%, transparent 100%), 
				linear-gradient(322deg, ${theme.bg.black} 20%, transparent 100%)`
			: `radial-gradient(circle, ${theme.text.colorful} 45%, transparent 100%),
				linear-gradient(132deg, ${theme.text.primary} 30%, transparent 100%), 
				linear-gradient(322deg, ${theme.bg.black} 50%, transparent 100%)`};

	box-shadow: 0.3em 0.3em 0.3em ${({ theme }) => theme.bg.shadowBlack},
		-0.3em -0.3em 0.3em ${({ theme }) => theme.bg.shadowWhite};
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.text.primary};
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		display: none;
	}
`
