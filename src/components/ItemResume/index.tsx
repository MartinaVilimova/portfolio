import React from 'react'
import { Element } from 'react-scroll'
import { Paragraph, ResumeTime } from '../../styled/StyledParagraph/styled'
import { StyledH6 } from '../../styled/StyledTitle/styled'
import { DataItemsResume } from './data'
import {
	CoverForShadesOfColors,
	Wrapper,
	Animation,
	BallScale,
	LineY,
} from './styled'
import { Fade, Zoom } from 'react-awesome-reveal'

export enum AnimationType {
	Fade = 'fade',
	Zoom = 'zoom',
}

type Props = {
	data: DataItemsResume[]
	animationType: AnimationType
}

const ItemResume: React.FC<Props> = ({ data, animationType }) => {
	const getItemContain = (contain: DataItemsResume, index: number) => (
		<Wrapper key={index}>
			<Animation>
				<BallScale />
				<LineY />
			</Animation>
			<Element name={contain.title}>
				<StyledH6>{contain.title}</StyledH6>
			</Element>
			<ResumeTime>{contain.time}</ResumeTime>
			<Paragraph>{contain.paragraph}</Paragraph>
		</Wrapper>
	)

	return (
		<CoverForShadesOfColors>
			{animationType === AnimationType.Fade && (
				<Fade
					cascade
					direction="down"
					triggerOnce={true}
					damping={0.2}
					duration={2000}
				>
					{data.map((text, index) => getItemContain(text, index))}
				</Fade>
			)}
			{animationType === AnimationType.Zoom && (
				<Zoom cascade triggerOnce={true}>
					{data.map((text, index) => getItemContain(text, index))}
				</Zoom>
			)}
		</CoverForShadesOfColors>
	)
}

export default ItemResume
