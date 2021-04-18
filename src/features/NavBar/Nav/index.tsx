import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { getMenuLinks } from './data'
import { NavContent, Wrapper, NavItem, Burger, NavLink } from './styled'

const Nav: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)
	const [visible, setVisible] = useState<boolean>(false)

	const { t } = useTranslation()

	const animateStart = () => {
		setVisible(true)
		setOpen(true)
	}

	const animateEnd = () => {
		setVisible(false)
		setTimeout(() => setOpen(false), 1400)
	}

	const location = useLocation()

	return (
		<Wrapper>
			<NavContent open={open}>
				{getMenuLinks(t).map((item, index) => (
					<NavItem key={index} visible={visible}>
						<NavLink
							to={item.link}
							active={location.pathname === item.link}
						>
							{item.name}
						</NavLink>
					</NavItem>
				))}
			</NavContent>
			<Burger
				open={open}
				onClick={() => (open ? animateEnd() : animateStart())}
			>
				<div></div>
				<div></div>
				<div></div>
			</Burger>
		</Wrapper>
	)
}

export default Nav
