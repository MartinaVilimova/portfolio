import React from 'react'
import profilePhoto from '../../assets/profile-photo.png'
import { Circle1 } from '../AnimationShapes/Circle1/styled'
import { Circle2 } from '../AnimationShapes/Circle2/styled'
import { Circle3 } from '../AnimationShapes/Circle3/styled'
import { Wrapper, ContentProfilePhoto, ColorShape, Picture } from './styled'

const Photo: React.FC = () => (
	<Wrapper>
		<ContentProfilePhoto>
			<Circle1 />
			<ColorShape>
				<Picture src={profilePhoto} alt="Profilová fotografie" />
			</ColorShape>
			<Circle2 />
			<Circle3 />
		</ContentProfilePhoto>
	</Wrapper>
)

export default Photo
