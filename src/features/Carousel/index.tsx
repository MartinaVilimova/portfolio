import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { DataItemsMyWork } from 'components/ItemMyWork/data'
import { Wrapper, WrapperPicture, Picture } from './styled'

type Props = {
	data: DataItemsMyWork
}

const PicturesCarousel: React.FC<Props> = ({ data }) => (
	<Wrapper>
		<Carousel
			showArrows={true}
			showStatus={false}
			showIndicators={true}
			showThumbs={true}
			thumbWidth={100}
			dynamicHeight={true}
			renderThumbs={() =>
				data.carousel.map((item, index) => (
					<div key={index}>
						<img src={item.src} alt={item.alt} />
					</div>
				))
			}
		>
			{data.carousel.map((item, index) => (
				<WrapperPicture key={index}>
					<Picture src={item.src} alt={item.alt} />
				</WrapperPicture>
			))}
		</Carousel>
	</Wrapper>
)

export default PicturesCarousel
