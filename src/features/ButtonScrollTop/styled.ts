import styled from 'styled-components'
import { MediaQueries } from 'themes'

export const Wrapper = styled.button<{ visible: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	position: fixed;
	padding: 0.5rem;
	bottom: 4.5rem;
	right: 2rem;
	border-radius: 50%;
	color: ${({ theme }) => theme.bg.primary};
	background-color: ${({ theme }) => theme.text.colorful.basicColor};
	box-shadow: 5px 5px 5px ${({ theme }) => theme.text.colorful.lightColor}
			inset,
		-5px -5px 5px ${({ theme }) => theme.text.colorful.darkColor} inset,
		5px 5px 5px ${({ theme }) => theme.bg.shadowBlack},
		-5px -5px 5px ${({ theme }) => theme.bg.shadowWhite};
	transform: ${({ visible }) =>
		visible ? 'translateX(0)' : 'translateX(11.7em)'};
	transition: transform 2s ease;

	&:hover {
		color: ${({ theme }) => theme.text.primary};
	}

	@media (max-width: ${MediaQueries.Ipad}) {
		display: none;
	}
`
