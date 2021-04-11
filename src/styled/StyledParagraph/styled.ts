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

export const ResumeTime = styled.p`
	font-size: 1rem;
	color: ${({ theme }) => theme.text.colorful.basicColor};
`
