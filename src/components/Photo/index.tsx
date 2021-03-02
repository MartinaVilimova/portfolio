import React from 'react'
import profilePhoto from '../../assets/profile-photo.png'
import { Wrapper, ContentProfilePhoto, ColorShape, Picture } from './styled'

const Photo: React.FC = () => (
	<Wrapper>
		<ContentProfilePhoto>
			<ColorShape>
				<Picture src={profilePhoto} alt="Profilová fotografie" />
			</ColorShape>
		</ContentProfilePhoto>
	</Wrapper>
)

export default Photo
