import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Route, Switch } from 'react-router-dom'
import ThemeProvider from 'features/Theme'
import Languages from 'features/Languages'
import i18n from 'locales'
import { GlobalStyles } from './styled'

// Pages
import Home from 'pages/Home'
import AboutMe from 'pages/AboutMe'
import Resume from 'pages/Resume'
import Knowledge from 'pages/Knowledge'
import MyWork from 'pages/MyWork'
import Contact from 'pages/Contact'
import FindError from 'pages/Error'
import SuccessfullySent from 'pages/SentEmail'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/successfully-sent" component={SuccessfullySent} />
		<Route path="/error-404" component={FindError} />
		<Route path="/contact" component={Contact} />
		<Route path="/my-work" component={MyWork} />
		<Route path="/knowledge" component={Knowledge} />
		<Route path="/resume" component={Resume} />
		<Route path="/about-me" component={AboutMe} />
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => (
	<I18nextProvider i18n={i18n}>
		<ThemeProvider>
			<GlobalStyles />
			<Routes />
			<Languages />
		</ThemeProvider>
	</I18nextProvider>
)

export default App
