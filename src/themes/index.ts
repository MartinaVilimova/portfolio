import { DefaultTheme } from 'styled-components'

export enum MediaQueries {
	LargeDesktop = '97em',
	Desktop = '90em',
	LargeIpad = '72em',
	Ipad = '63em',
}

export const LightTheme: DefaultTheme = {
	bg: {
		primary: '#f1f3f6',
		shadowWhite: '#fafafa',
		shadowBlack: '#dadada',
		black: '#212225',
	},
	text: {
		primary: '#212529',
		grey: '#8b9299',
		colorful: '#2fb99e',
	},
}

export const DarkTheme: DefaultTheme = {
	bg: {
		primary: '#2c2d30',
		shadowWhite: '#3d3d3d',
		shadowBlack: '#212225',
		black: '#212225',
	},
	text: {
		primary: '#fafafa',
		grey: '#d7e2d2',
		colorful: '#2fb99e',
	},
}
