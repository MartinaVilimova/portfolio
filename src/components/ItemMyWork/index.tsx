import React, { useState } from 'react'
import { Wrapper, HoverBox, Picture, IconsBox, IconButton } from './styled'
import { Link, Search, Github } from '@styled-icons/feather'
import { dataMyWork } from './data'
import { StyledA } from '../../styled/StyledLink/styled'
import DescriptionMyWork from '../../features/Description'
import { StyledH5 } from '../../styled/StyledTitle/styled'

const ItemMyWork: React.FC = () => {
	const [click, setClick] = useState(false)

	const shutDown = () => setClick(false)

	return (
		<>
			{dataMyWork.map((item, index) => (
				<Wrapper key={index}>
					<Picture src={item.picture} />
					<HoverBox>
						<IconsBox>
							{item.webLink && (
								<StyledA href="">
									<IconButton>
										<Link />
									</IconButton>
								</StyledA>
							)}

							<IconButton
								onClick={() => {
									setClick(true)
								}}
							>
								<Search />
							</IconButton>

							{item.githubLink && (
								<StyledA href="">
									<IconButton>
										<Github />
									</IconButton>
								</StyledA>
							)}
						</IconsBox>
						<StyledH5>{item.subtitle}</StyledH5>
					</HoverBox>
				</Wrapper>
			))}
			<DescriptionMyWork
				hidden={click}
				shutDown={shutDown}
				subtitle="Autoodstrejdy"
			/>
		</>
	)
}

export default ItemMyWork
