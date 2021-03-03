import React from 'react'
import picture from '../../assets/picture.jpg'
import { Wrapper, Photo } from './styled'

const Picture: React.FC = () => (
	<Wrapper>
		<Photo src={picture} alt="má náhodná fotografie" />
	</Wrapper>
)

export default Picture
