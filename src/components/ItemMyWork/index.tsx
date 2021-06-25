import React, { useState } from 'react'
import { Link, Search, Github } from '@styled-icons/feather'
import DescriptionMyWork from 'features/Description'
import { StyledA } from 'styled/StyledLink/styled'
import { StyledH5 } from 'styled/StyledTitle/styled'
import { DataFilter, DataItemsMyWork } from './data'
import { Wrapper, HoverBox, Picture, IconsBox, IconButton } from './styled'

type Props = {
	dataItem: DataItemsMyWork
}

const ItemMyWork: React.FC<Props> = ({ dataItem }) => {
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
			<Wrapper>
				<Picture src={dataItem.myWorkItem.picture} />
				<HoverBox>
					<IconsBox>
						<IconButton
							onClick={() => {
								setClick(true)
								setData(dataItem)
							}}
						>
							<Search />
						</IconButton>

						{dataItem.myWorkItem.webLink && (
							<StyledA href="">
								<IconButton>
									<Link />
								</IconButton>
							</StyledA>
						)}

						{dataItem.myWorkItem.githubLink && (
							<StyledA href="">
								<IconButton>
									<Github />
								</IconButton>
							</StyledA>
						)}
					</IconsBox>
					<StyledH5>{dataItem.myWorkItem.subtitle}</StyledH5>
				</HoverBox>
			</Wrapper>
			<DescriptionMyWork hidden={click} shutDown={shutDown} data={data} />
		</>
	)
}

export default ItemMyWork
