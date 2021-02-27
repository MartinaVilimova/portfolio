import React, { useState } from 'react'
import { Color, Theme, useThemeControl } from '../Theme'
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

const SettingsBox: React.FC = () => {
	const { theme, setColor } = useThemeControl()

	const [selectedTheme, setTheme] = theme

	const [open, setOpen] = useState(true)

	return (
		<Wrapper click={open}>
			<Content>
				<Title>Nastavení</Title>
				<Title>Barevný přepínač</Title>
				<Colors>
					<div onClick={() => setColor(Color.Green)} />
					<div onClick={() => setColor(Color.Pink)} />
					<div onClick={() => setColor(Color.Blue)} />
				</Colors>
				<Line />
				<Title>Světlá &#38; Tmavá verze</Title>
				<Toggle
					isChecked={selectedTheme !== Theme.Light}
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
