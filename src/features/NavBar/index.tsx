import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { ColorfulText } from '../../styled/ColorfulText/styled'
import { StyledLink } from '../../styled/StyledLink/styled'
import { Wrapper, FixedNavBar, LogoBox, Logo } from './styled'

const NavBar: React.FC = () => {
	const [show, handleShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () =>
			window.scrollY > 1 ? handleShow(true) : handleShow(false)
		)
	}, [])

	return (
		<Wrapper>
			<FixedNavBar shadow={show}>
				<LogoBox>
					<StyledLink to="/">
						<Logo>
							M<ColorfulText>V</ColorfulText>
						</Logo>
					</StyledLink>
				</LogoBox>
				<Nav />
			</FixedNavBar>
		</Wrapper>
	)
}
export default NavBar
