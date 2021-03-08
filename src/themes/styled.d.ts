import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		readonly selectedTheme: Theme
		readonly bg: {
			readonly primary: string
			readonly shadowWhite: string
			readonly shadowBlack: string
			readonly black: string
		}
		readonly text: {
			readonly primary: string
			readonly grey: string
			readonly warning: string
			readonly colorful: string
		}
	}
}
