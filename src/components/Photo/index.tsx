import React from 'react'
import profilePhoto from '../../assets/profile-photo.png'
import { Wrapper, ColorShape, Picture } from './styled'

const Photo: React.FC = () => {
	return (
		<Wrapper>
			<ColorShape>
				<Picture src={profilePhoto} alt="profilová fotoografie" />
			</ColorShape>
		</Wrapper>
	)
}

export default Photo
