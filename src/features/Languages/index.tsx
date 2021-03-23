import React, { useState } from 'react'
import { Wrapper, Language } from './styled'

enum NamesLanguages {
	CZ = 'cz',
	EN = 'en',
}

const languageOptions = [NamesLanguages.CZ, NamesLanguages.EN]

const Languages: React.FC = () => {
	const [active, setActive] = useState(NamesLanguages.CZ)

	return (
		<Wrapper>
			{languageOptions.map((item, index) => (
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
