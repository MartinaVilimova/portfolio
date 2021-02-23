import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		readonly bg: {
			readonly primary: string
			readonly shadowWhite: string
			readonly shadowBlack: string
		}
		readonly text: {
			readonly primary: string
			readonly grey: string
			readonly green: string
		}
	}
}
