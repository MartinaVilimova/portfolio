import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import { ColorfulText } from '../../variables/styled'
import { Wrapper, FixedNavBar, LogoBox, Logo } from './styled'

const NavBar: React.FC = () => {
	const [show, handleShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 1) {
				handleShow(true)
			} else {
				handleShow(false)
			}
		})
	}, [])

	return (
		<Wrapper>
			<FixedNavBar shadow={show}>
				<LogoBox>
					<Logo>
						<Link to="/">
							M<ColorfulText>V</ColorfulText>
						</Link>
					</Logo>
				</LogoBox>
				<Nav />
			</FixedNavBar>
		</Wrapper>
	)
}
export default NavBar
