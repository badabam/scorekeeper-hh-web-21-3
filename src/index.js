import { Auth0Provider } from '@auth0/auth0-react'
import { createBrowserHistory } from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

// Custom history to use in react-router-dom and auth0
export const history = createBrowserHistory()

const onRedirectCallback = appState => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname)
}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      // domain="example.auth0.com"
      domain="dev-fq8t87yy.eu.auth0.com"
      clientId="9LPJDFCcTdhYKSFFcMQervQsS2aLsqQu"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
