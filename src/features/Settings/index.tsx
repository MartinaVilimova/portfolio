import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronsLeft, Check } from '@styled-icons/feather'
import Toggle from 'components/Toggle'
import { useThemeControl } from 'features/Theme'
import { Color, Theme } from 'themes'
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

const colorSwitches = [Color.Green, Color.Pink, Color.Blue]

const SettingsBox: React.FC = () => {
	const { theme, setColor } = useThemeControl()

	const [selectedTheme, setTheme] = theme

	const [open, setOpen] = useState<boolean>(true)

	const [active, setActive] = useState(Color.Green)

	const { t } = useTranslation()

	return (
		<Wrapper click={open}>
			<Content>
				<Title>{t('recurrent.settings')}</Title>
				<Title>{t('recurrent.colorSwitch')}</Title>
				<Colors>
					{colorSwitches.map((item, index) => (
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
				<Title>{t('recurrent.theme')}</Title>
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
