import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavContent, Wrapper, NavItem, Burger } from './styled'

const Nav: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<Wrapper>
			<NavContent open={open}>
				<NavItem>
					<Link to="/">O mně</Link>
				</NavItem>
				<NavItem>
					<Link to="/">Vzdělání</Link>
				</NavItem>
				<NavItem>
					<Link to="/">Znalosti</Link>
				</NavItem>
				<NavItem>
					<Link to="/">Má práce</Link>
				</NavItem>
				<NavItem>
					<Link to="/">Kontakt</Link>
				</NavItem>
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
