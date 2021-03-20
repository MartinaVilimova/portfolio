import React, { useState } from 'react'
import { useThemeControl } from '../Theme'
import { Color, Theme } from '../../themes'
import Toggle from '../../components/Toggle'
import { ChevronsLeft, Check } from '@styled-icons/feather'
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
	Switcher,
} from './styled'

const ColorSwitches = [Color.Green, Color.Pink, Color.Blue]

const SettingsBox: React.FC = () => {
	const { theme, setColor } = useThemeControl()

	const [selectedTheme, setTheme] = theme

	const [open, setOpen] = useState<boolean>(true)

	const [active, setActive] = useState(ColorSwitches[0])

	return (
		<Wrapper click={open}>
			<Content>
				<Title>Nastavení</Title>
				<Title>Barevný přepínač</Title>
				<Colors>
					{ColorSwitches.map((item, index) => (
						<Switcher
							key={index}
							onClick={() => {
								setActive(item)
								setColor(item)
							}}
						>
							{active === item && <Check />}
						</Switcher>
					))}
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
				<IconBox onClick={() => setOpen(!open)}>
					<ChevronsLeft />
					<SettingsIcon click={open} />
				</IconBox>
			</ShadowInsetBox>
		</Wrapper>
	)
}

export default SettingsBox
