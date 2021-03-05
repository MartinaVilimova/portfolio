import React from 'react'
import profilePhoto from '../../assets/profile-photo.png'
import { BallY } from '../AnimationShapes/BallY/styled'
import { BallCircle } from '../AnimationShapes/BallCircle/styled'
import { Wrapper, ContentProfilePhoto, ColorShape, Photo } from './styled'

enum WayOfAnimation {
	Ball1 = 'ball1',
	Ball2 = 'ball2',
}

const PhotoHome: React.FC = () => (
	<Wrapper>
		<ContentProfilePhoto>
			<BallY ballAnimation={WayOfAnimation.Ball1} />
			<ColorShape>
				<Photo src={profilePhoto} alt="Profilová fotografie" />
			</ColorShape>
			<BallY ballAnimation={WayOfAnimation.Ball2} />
			<BallCircle />
		</ContentProfilePhoto>
	</Wrapper>
)

export default PhotoHome
