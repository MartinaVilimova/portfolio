import styled from 'styled-components'
import { MediaQueries } from '../../themes'

export const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	padding-bottom: 1em;

	& ul:nth-child(1) {
		margin-left: 1.5em;
		width: 90%;
	}
`

export const SmallText = styled.span`
	font-size: 0.7em;
`

export const PersonalInfo1 = styled.ul`
	box-sizing: border-box;
	width: 100%;
	justify-self: center;
	list-style: none;
	padding: 0;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		width: 95%;
	}
`

export const Name = styled.li`
	font-size: 1em;
	color: ${({ theme }) => theme.text.primary};
	padding-bottom: 1em;
`

export const Text = styled.span`
	display: block;
	color: ${({ theme }) => theme.text.grey};
	filter: brightness(70%);
	overflow: hidden;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		font-size: 0.8em;
	}
`

export const WrapperLinks = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-around;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		width: 100%;
	}
`
