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
	Title,
	Line,
	Colors,
} from './styled'
import ColorSwitch from '../../components/ColorSwitch'

const SettingsBox: React.FC = () => {
	const [theme, setTheme] = useThemeControl()
	const [open, setOpen] = useState(true)

	return (
		<Wrapper click={open}>
			<Content>
				<Title>Nastavení</Title>
				<Title>Barevný přepínač</Title>
				<Colors>
					<ColorSwitch />
					<ColorSwitch />
					<ColorSwitch />
				</Colors>
				<Line />
				<Title>Světlá &#38; Tmavá verze</Title>
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
