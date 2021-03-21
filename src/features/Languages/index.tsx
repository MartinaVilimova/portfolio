import React, { useState } from 'react'
import { Wrapper, Language } from './styled'

const languages = ['cz', 'en']

const Languages: React.FC = () => {
	const [active, setActive] = useState(languages[0])

	return (
		<Wrapper>
			{languages.map((item, index) => (
				<Language
					key={index}
					active={active === item}
					onClick={() => setActive(item)}
				>
					{item}
				</Language>
			))}
		</Wrapper>
	)
}

export default Languages
