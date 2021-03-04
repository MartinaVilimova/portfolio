import React, { useEffect, useState } from 'react'
import { Wrapper } from './styled'
import { animateScroll as scroll} from 'react-scroll'

const ButtonScrollTop: React.FC = () => {
    const [show, handleShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 500) {
				handleShow(true)
			} else {
				handleShow(false)
			}
		})
	}, [])

    const scrollTop = () => scroll.scrollToTop()

    return (
        <Wrapper visible={show} onClick={scrollTop}>
            click
        </Wrapper>
    )
}

export default ButtonScrollTop
