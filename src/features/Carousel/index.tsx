import React from 'react'
import { boolean, number } from '@storybook/addon-knobs'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Wrapper, WrapperPicture, Picture } from './styled'
import { dataPictures } from './data'

const PicturesCarousel: React.FC = () => {
	const tooglesGroupId = 'Toggles'
	const valuesGroupId = 'Values'

	const getConfigurableProps = () => ({
		showArrows: boolean('showArrows', true, tooglesGroupId),
		showStatus: boolean('showStatus', false, tooglesGroupId),
		showIndicators: boolean('showIndicators', true, tooglesGroupId),
		showThumbs: boolean('showThumbs', true, tooglesGroupId),
		thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
		dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
	})

	return (
		<Wrapper>
			<Carousel
				{...getConfigurableProps()}
				renderThumbs={() =>
					dataPictures.map((item, index) => (
						<div key={index}>
							<img src={item.src} alt={item.alt} />
						</div>
					))
				}
			>
				{dataPictures.map((item, index) => (
					<WrapperPicture key={index}>
						<Picture src={item.src} alt={item.alt} />
					</WrapperPicture>
				))}
			</Carousel>
		</Wrapper>
	)
}

export default PicturesCarousel
