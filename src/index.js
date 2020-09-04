import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.scss'
import App from './components/app'

import ApiService from './services/api-service'
import DTO from './services/dto'
import { ApiServiceContext } from './hoc/with-api'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiServiceContext.Provider value={new ApiService(new DTO())}>
        <App />
      </ApiServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
