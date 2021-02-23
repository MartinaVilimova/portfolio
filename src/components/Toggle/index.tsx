import React, { useState } from 'react'
import { Moon, Sun } from '@styled-icons/feather'
import {
	Checkbox,
	IconSun,
	IconMoon,
	RoundSlider,
	Switch,
	Wrapper,
} from './styled'

interface Props {
	onChange: (checked: boolean) => void
	isChecked?: boolean
}

const Toggle: React.FC<Props> = ({ onChange, isChecked = false }) => {
	const [checked, setChecked] = useState<boolean>(isChecked)

	const change = (checked: boolean): void => {
		setChecked(checked)
		onChange(checked)
	}

	return (
		<Wrapper>
			<IconSun light={checked} onClick={() => change(false)}>
				<Sun />
			</IconSun>
			<Switch>
				<Checkbox
					checked={checked}
					onChange={(e) => change(e.target.checked)}
				/>
				<RoundSlider />
			</Switch>
			<IconMoon light={checked} onClick={() => change(true)}>
				<Moon />
			</IconMoon>
		</Wrapper>
	)
}

export default Toggle
