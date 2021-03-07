import React from 'react'
import {
	Wrapper,
	HoverBox,
	Picture,
	IconsBox,
	IconButton,
	Subtitle,
} from './styled'
import { Link, Search } from '@styled-icons/feather'
import { dataMyWork } from './data'
import { StyledA } from '../../styled/StyledLink/styled'

const ItemMyWork: React.FC = () => (
	<>
		{dataMyWork.map((item, index) => (
			<Wrapper key={index}>
				<Picture src={item.picture} />
				<HoverBox>
					<IconsBox>
						<StyledA href="">
							<IconButton>
								<Link />
							</IconButton>
						</StyledA>
						<IconButton>
							<Search />
						</IconButton>
					</IconsBox>
					<Subtitle>{item.subtitle}</Subtitle>
				</HoverBox>
			</Wrapper>
		))}
	</>
)

export default ItemMyWork
