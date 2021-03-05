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

const ItemMyWork: React.FC = () => (
	<>
		{dataMyWork.map((item) => (
			<Wrapper key={item.id}>
				<Picture src={item.picture} />
				<HoverBox>
					<IconsBox>
						<IconButton>
							<Link />
						</IconButton>
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
