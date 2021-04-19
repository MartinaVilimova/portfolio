import styled from 'styled-components'
import { MediaQueries } from 'themes'

export const Paragraph = styled.p`
	width: 90%;
	font-size: 1rem;
	padding-bottom: 1.5rem;
	color: ${({ theme }) => theme.text.grey};

	@media (max-width: ${MediaQueries.Ipad}) {
		width: 95%;
	}
`

export const ResumeSubtitle = styled.p`
	font-size: 1rem;
	color: ${({ theme }) => theme.text.colorful.basicColor};
	line-height: 1.3rem;
	padding: 0.3rem 0;
`
