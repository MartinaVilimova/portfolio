import React, { useEffect, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { ArrowUp } from '@styled-icons/feather'
import { Wrapper } from './styled'

const ButtonScrollTop: React.FC = () => {
	const [show, handleShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () =>
			window.scrollY > 500 ? handleShow(true) : handleShow(false)
		)
	}, [])

	const scrollTop = () => scroll.scrollToTop()

	return (
		<Wrapper visible={show} onClick={scrollTop}>
			<ArrowUp />
		</Wrapper>
	)
}

export default ButtonScrollTop
