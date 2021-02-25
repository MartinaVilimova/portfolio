import React from 'react'
import { Link } from 'react-router-dom'
import Burger from '../Burger'
import { linksData } from './data'
import { NavContent, Wrapper, NavItem } from './styled'

const Nav: React.FC = () => {
	return (
		<Wrapper>
			<NavContent>
				{linksData.map((linksData, index) => (
					<NavItem key={index}>
						<Link to="/">{linksData.navLink}</Link>
					</NavItem>
				))}
			</NavContent>
			<Burger />
		</Wrapper>
	)
}

export default Nav
