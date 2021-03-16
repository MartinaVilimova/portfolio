import { DefaultTheme } from 'styled-components'

export enum MediaQueries {
	Desktop = '90em',
	Ipad = '65em',
	SmallerIpad = '31em',
}

export enum Theme {
	Dark = 'Dark',
	Light = 'Light',
}

export enum Color {
	Green = '#2fb99e',
	Pink = '#fe668e',
	Blue = '#0fcae8',
}

export const chooseColors = {
	[Color.Green]: {
		lightColor: '#91f7e3',
		basicColor: '#2fb99e',
		darkColor: '#10735f',
	},
	[Color.Pink]: {
		lightColor: '#f4acbf',
		basicColor: '#fe668e',
		darkColor: '#983a53',
	},
	[Color.Blue]: {
		lightColor: '#9beffc',
		basicColor: '#0fcae8',
		darkColor: '#066f80',
	},
}

export const LightTheme: DefaultTheme = {
	selectedTheme: Theme.Light,
	bg: {
		primary: '#e9ecf0',
		shadowWhite: '#fafafa',
		shadowBlack: '#dadada',
		black: '#212225',
	},
	text: {
		primary: '#212529',
		grey: '#8b9299',
		warning: '#e83849',
		colorful: chooseColors[Color.Green],
	},
}

export const DarkTheme: DefaultTheme = {
	selectedTheme: Theme.Dark,
	bg: {
		primary: '#2c2d30',
		shadowWhite: '#3d3d3d',
		shadowBlack: '#212225',
		black: '#212225',
	},
	text: {
		primary: '#fafafa',
		grey: '#a1a7ac',
		warning: '#e83849',
		colorful: chooseColors[Color.Green],
	},
}
