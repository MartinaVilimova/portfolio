import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { menuLinks } from './data'
import { NavContent, Wrapper, NavItem, Burger, NavLink } from './styled'

const Nav: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	const location = useLocation()

	return (
		<Wrapper>
			<NavContent open={open}>
				{menuLinks.map((item, index) => (
					<NavItem key={index}>
						<NavLink
							to={item.link}
							active={location.pathname === item.link}
						>
							{item.name}
						</NavLink>
					</NavItem>
				))}
			</NavContent>
			<Burger open={open} onClick={() => setOpen(!open)}>
				<div></div>
				<div></div>
				<div></div>
			</Burger>
		</Wrapper>
	)
}

export default Nav
