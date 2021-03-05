import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ThemeProvider from '../Theme'
import { GlobalStyles } from './styled'

// Pages
import Home from '../../pages/Home'
import AboutMe from '../../pages/AboutMe'
import Resume from '../../pages/Resume'
import Knowledge from '../../pages/Knowledge'
import MyWork from '../../pages/MyWork'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/my-work" component={MyWork} />
		<Route path="/knowledge" component={Knowledge} />
		<Route path="/resume" component={Resume} />
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
