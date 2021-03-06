import React from 'react'
import { Element } from 'react-scroll'
import { Paragraph, ResumeTime } from '../../styled/StyledParagraph/styled'
import { StyledH6 } from '../../styled/StyledTitle/styled'
import { BallScale } from '../AnimationShapes/BallScale/styled'
import { LineY } from '../AnimationShapes/LineY/styled'
import { DataItemsResume } from './data'
import { Wrapper, Animation } from './styled'

type Props = {
	data: DataItemsResume[]
}

//@TODO: later add an animation to slowly display each item
const ItemResume: React.FC<Props> = ({ data }) => (
	<>
		{data.map((text, index) => (
			<Wrapper key={index}>
				<Animation>
					<BallScale />
					<LineY />
				</Animation>
				<Element name={text.title}>
					<StyledH6>{text.title}</StyledH6>
				</Element>
				<ResumeTime>{text.time}</ResumeTime>
				<Paragraph>{text.paragraph}</Paragraph>
			</Wrapper>
		))}
	</>
)

export default ItemResume