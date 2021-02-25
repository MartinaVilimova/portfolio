import React from 'react'
import { Link } from 'react-router-dom'
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
		</Wrapper>
	)
}

export default Nav
