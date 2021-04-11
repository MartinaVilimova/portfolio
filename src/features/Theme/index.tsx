import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { chooseColors, Color, DarkTheme, LightTheme, Theme } from 'themes'

type ThemeControl = {
	theme: [Theme, (theme: Theme) => void]
	setColor: (color: Color) => void
}

const selectTheme = {
	[Theme.Dark]: DarkTheme,
	[Theme.Light]: LightTheme,
}

const defaultTheme = Theme.Dark
const defaultColor = Color.Green

const isValidTheme = (theme: string): theme is keyof typeof Theme =>
	Object.keys(selectTheme).includes(theme)

export const toTheme = (theme: string | null): Theme | null =>
	theme && isValidTheme(theme) ? Theme[theme] : null

const getUserPreferredTheme = (): Theme | null => {
	if (!window.matchMedia) return null

	const userPrefersDark = matchMedia('(prefers-color-scheme: dark)').matches

	if (userPrefersDark) return Theme.Dark

	const userPrefersLight = matchMedia('(prefers-color-scheme: light)').matches

	if (userPrefersLight) return Theme.Light

	return null
}

const themeStorageKey = 'theme'
const colorStorageKey = 'color'

const getInitialTheme = (): Theme => {
	const storedTheme = toTheme(localStorage?.getItem(themeStorageKey))
	if (storedTheme) return storedTheme

	const preferredTheme = getUserPreferredTheme()
	if (preferredTheme) return preferredTheme

	return defaultTheme
}

const saveSelectedTheme = (theme: Theme): void =>
	localStorage.setItem(themeStorageKey, theme)

const saveSelectedColor = (color: Color): void =>
	localStorage.setItem(colorStorageKey, color)

const ThemeControlContext = createContext<ThemeControl>({
	theme: [
		defaultTheme,
		() => {
			return
		},
	],
	setColor: () => {
		return
	},
})

const ThemeProvider: React.FC = ({ children }) => {
	const themeControl = useState<Theme>(getInitialTheme)
	const [theme] = themeControl

	// @TODO: add get Initial Color instead defaultColor
	const [color, setColor] = useState<Color>(defaultColor)

	useEffect(() => saveSelectedTheme(theme), [theme])
	useEffect(() => saveSelectedColor(color), [color])

	return (
		<ThemeControlContext.Provider value={{ theme: themeControl, setColor }}>
			<StyledComponentsThemeProvider
				theme={{
					...selectTheme[theme],
					text: {
						...selectTheme[theme].text,
						colorful: chooseColors[color],
					},
				}}
			>
				{children}
			</StyledComponentsThemeProvider>
		</ThemeControlContext.Provider>
	)
}

export const useThemeControl = (): ThemeControl =>
	useContext(ThemeControlContext)

export default ThemeProvider
