import React from 'react'
import { Paragraph, ResumeTime } from '../../styled/StyledParagraph/styled'
import { StyledH6 } from '../../styled/StyledTitle/styled'
import { DataItems } from './data'
import { Wrapper, Animation} from './styled'

type Props = {
    data: DataItems[]
}

const Item: React.FC<Props> = ({data}) => (
    <>
        {data.map((text, index) => (
            <Wrapper key={index}>
                <Animation></Animation>
                <StyledH6>{text.title}</StyledH6>
                <ResumeTime>{text.time}</ResumeTime>
                <Paragraph>{text.paragraph}</Paragraph>
            </Wrapper>
        ))}
    </>
)

export default Item
