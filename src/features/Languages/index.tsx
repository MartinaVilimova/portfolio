import React, { useState } from 'react'
import i18next from 'i18next'
import { AvailableLanguages } from 'locales'
import { Wrapper, Language } from './styled'

const languageOptions = [AvailableLanguages.CS, AvailableLanguages.EN]

const Languages: React.FC = () => {
	const [active, setActive] = useState(i18next.language)
	i18next.changeLanguage(active)

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
