import React from 'react'
import { Link } from 'react-router-dom'
import Burger from '../Burger'
import { NavContent, Wrapper, NavItem } from './styled'

const Nav: React.FC = () => {
	return (
		<Wrapper>
			<NavContent>
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
			<Burger />
		</Wrapper>
	)
}

export default Nav
