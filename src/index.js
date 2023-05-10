import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import 'antd/dist/reset.css'

import App from './App'
import 'normalize.css'
import '@/assets/css/index.less'
import store from './store'
import { theme } from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <Suspense fallback="loading">
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </HashRouter>
    </Suspense>
  // </React.StrictMode>
)
