import React, { useState } from 'react'
import { Theme, useThemeControl } from '../Theme'
import Toggle from '../../components/Toggle'
import { ArrowLeft } from '@styled-icons/feather'
import {
	Wrapper,
	Content,
	ShadowInsetBox,
	HiddenBox,
	IconBox,
	SettingsIcon,
} from './styled'

const SettingsBox: React.FC = () => {
	const [theme, setTheme] = useThemeControl()
	const [open, setOpen] = useState(false)

	return (
		<Wrapper click={open}>
			<Content>
				<Toggle
					isChecked={theme === Theme.Dark}
					onChange={(checked) =>
						setTheme(checked ? Theme.Dark : Theme.Light)
					}
				/>
			</Content>
			<ShadowInsetBox>
				<HiddenBox></HiddenBox>
				<IconBox>
					<ArrowLeft />
					<SettingsIcon click={open} onClick={() => setOpen(!open)} />
				</IconBox>
			</ShadowInsetBox>
		</Wrapper>
	)
}

export default SettingsBox
