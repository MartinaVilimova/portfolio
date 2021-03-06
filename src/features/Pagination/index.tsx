import React from 'react'
import { StyledLink } from '../../styled/StyledLink/styled'
import { Wrapper, Page, PageArrow } from './styled'
import { ArrowRight, ArrowLeft } from '@styled-icons/feather'

const Pagination: React.FC = () => (
	<Wrapper>
		<StyledLink to="">
			<PageArrow>
				<ArrowLeft />
			</PageArrow>
		</StyledLink>
		<StyledLink to="">
			<Page>1</Page>
		</StyledLink>
		<StyledLink to="">
			<Page>2</Page>
		</StyledLink>
		<StyledLink to="">
			<Page>3</Page>
		</StyledLink>
		<StyledLink to="">
			<PageArrow>
				<ArrowRight />
			</PageArrow>
		</StyledLink>
	</Wrapper>
)

export default Pagination
