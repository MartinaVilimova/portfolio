import React, { useState } from 'react'
import { Link, Search, Github } from '@styled-icons/feather'
import DescriptionMyWork from 'features/Description'
import { StyledA } from 'styled/StyledLink/styled'
import { StyledH5 } from 'styled/StyledTitle/styled'
import { DataFilter, DataItemsMyWork } from './data'
import { Wrapper, HoverBox, Picture, IconsBox, IconButton } from './styled'

type Props = {
	dataItems: DataItemsMyWork[]
}

const ItemMyWork: React.FC<Props> = ({ dataItems }) => {
	const [click, setClick] = useState(false)
	const [data, setData] = useState<DataItemsMyWork>({
		myWorkItem: {
			picture: '',
			subtitle: '',
			webLink: '',
			githubLink: '',
		},
		authors: [],
		filter: DataFilter.ownWork,
		description: '',
		carousel: [],
		skills: '',
		updateDate: '',
	})

	const shutDown = () => setClick(false)

	return (
		<>
			{dataItems.map((item, index) => (
				<Wrapper key={index}>
					<Picture src={item.myWorkItem.picture} />
					<HoverBox>
						<IconsBox>
							<IconButton
								onClick={() => {
									setClick(true)
									setData(item)
								}}
							>
								<Search />
							</IconButton>

							{item.myWorkItem.webLink && (
								<StyledA href="">
									<IconButton>
										<Link />
									</IconButton>
								</StyledA>
							)}

							{item.myWorkItem.githubLink && (
								<StyledA href="">
									<IconButton>
										<Github />
									</IconButton>
								</StyledA>
							)}
						</IconsBox>
						<StyledH5>{item.myWorkItem.subtitle}</StyledH5>
					</HoverBox>
				</Wrapper>
			))}
			<DescriptionMyWork hidden={click} shutDown={shutDown} data={data} />
		</>
	)
}

export default ItemMyWork
