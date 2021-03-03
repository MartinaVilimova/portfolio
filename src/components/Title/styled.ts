import styled from 'styled-components'
import { MediaQueries, Theme } from '../../themes'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const BigTitle = styled.div`
	font-size: 3.5em;
	font-weight: 800;
	text-align: center;
	color: ${({ theme }) =>
		theme.selectedTheme === Theme.Dark
			? theme.bg.shadowWhite
			: theme.bg.shadowBlack};
	position: relative;
	top: 0.3em;

	@media (max-width: ${MediaQueries.SmallerIpad}) {
		font-size: 3em;
	}
`
