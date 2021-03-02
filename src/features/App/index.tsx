import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ThemeProvider from '../Theme'
import { GlobalStyles } from './styled'

// Pages
import Home from '../../pages/Home'
import AboutMe from '../../pages/AboutMe'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/about-me" component={AboutMe} />
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
