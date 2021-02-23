import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ThemeProvider from '../../features/Theme'
import { GlobalStyles } from './styled'

// Pages
import Home from '../../pages/Home'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => (
	<ThemeProvider>
		<GlobalStyles />
		<Routes />
	</ThemeProvider>
)

export default App
