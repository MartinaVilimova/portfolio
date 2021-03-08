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

export const LightTheme: DefaultTheme = {
	selectedTheme: Theme.Light,
	bg: {
		primary: '#f1f3f6',
		shadowWhite: '#fafafa',
		shadowBlack: '#dadada',
		black: '#212225',
	},
	text: {
		primary: '#212529',
		grey: '#8b9299',
		warning: '#e83849',
		colorful: '#2fb99e',
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
		grey: '#d7e2d2',
		warning: '#e83849',
		colorful: '#2fb99e',
	},
}
