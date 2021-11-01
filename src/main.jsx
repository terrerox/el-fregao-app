import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { load } from './config/sqlite.js'
import App from './App'

load()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
