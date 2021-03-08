import React, { useEffect, useState } from 'react'
import { StyledH5, StyledH6 } from '../../styled/StyledTitle/styled'
import {
	ModalBox,
	Wrapper,
	FixedTitle,
	IconCross,
	DescriptionContent,
	Pictures,
	Article,
} from './styled'
import { X } from '@styled-icons/feather'
import Columns, { NumberColumns } from '../../components/Columns'
import { Paragraph } from '../../styled/StyledParagraph/styled'
import Carousel from '../Carousel'

type Props = {
	hidden: boolean
	subtitle: string
}

const DescriptionMyWork: React.FC<Props> = ({ hidden, subtitle }) => {
	const [click, setClick] = useState(hidden)

	useEffect(() => {
		setClick(!click)
	}, [hidden])
	
	return (
		<Wrapper visible={click}>
			<ModalBox>
				<FixedTitle>
					<StyledH5>{subtitle}</StyledH5>
					<IconCross onClick={() => setClick(false)}>
						<X />
					</IconCross>
				</FixedTitle>
				<DescriptionContent>
					<Pictures>
						<Carousel />
					</Pictures>
					<StyledH6>Popis projektu</StyledH6>
					<Paragraph>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Impedit esse dolorum laboriosam totam voluptate, dicta
						maxime porro eveniet veniam recusandae consequatur
						reprehenderit neque, ullam iusto optio qui mollitia
						earum deleniti. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Labore cupiditate, commodi aspernatur
						nemo ab laboriosam obcaecati laborum odio eaque aperiam
						atque nisi corrupti molestiae. Assumenda exercitationem
						accusamus labore quae maiores! Lorem ipsum, dolor sit
						amet consectetur adipisicing elit. Corrupti, fuga. Quae
						voluptates autem blanditiis, dignissimos illo, fuga
						corrupti consequuntur dolorem, quibusdam illum explicabo
						accusantium ullam fugit soluta veniam eligendi
						obcaecati. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Placeat, quasi sed nihil minima unde
						porro sint magni eius, itaque architecto mollitia soluta
						illum asperiores iste incidunt delectus rerum vero
						culpa! Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. A dolores excepturi eius enim,
						provident ipsum veniam veritatis, deleniti, dignissimos
						voluptate incidunt optio explicabo cum assumenda minus?
						Possimus ullam ex nemo? Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Veniam blanditiis
						repellendus aspernatur, architecto explicabo a quam at
						quod eveniet? Facilis itaque ratione eveniet facere
						voluptas iure beatae quas architecto qui! Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Quia,
						perspiciatis! Explicabo veritatis fugit ducimus officiis
						iure, eius dolor sunt fugiat odit voluptas, eveniet
						adipisci nostrum! Consequatur corporis dicta molestias
						sequi? Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Laboriosam iure aliquid illum
						veritatis! Nulla amet qui architecto sit fugiat, aliquid
						optio corporis suscipit cumque, impedit, dolore ullam
						commodi deleniti id.
					</Paragraph>
					<Columns
						columns={NumberColumns.Columns2}
						columnsIpad={NumberColumns.Columns1}
					>
						<Article>
							<StyledH6>Projekt vytvořili:</StyledH6>
							<p>Martina Vilímová</p>
							<p>Tomáš Hampl</p>
							<p>Martina Vilímová</p>
							<p>Tomáš Hampl</p>
						</Article>
						<Article>
							<StyledH6>Dovednosti:</StyledH6>
							<p>HTML / CSS / JS / TS / React</p>
						</Article>
						<Article>
							<StyledH6>Má poslední aktualizace:</StyledH6>
							<p>srpen 2019</p>
						</Article>
					</Columns>
				</DescriptionContent>
			</ModalBox>
		</Wrapper>
	)
}

export default DescriptionMyWork
