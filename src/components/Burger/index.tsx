import React, { useState } from 'react'
import { Wrapper } from './styled'

const Burger: React.FC = () => {
	const [open, setOpen] = useState(false)

	return (
		<Wrapper open={open} onClick={() => setOpen(!open)}>
			<div></div>
			<div></div>
			<div></div>
		</Wrapper>
	)
}

export default Burger
