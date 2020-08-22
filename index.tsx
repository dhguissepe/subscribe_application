import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/ts/App'
import './src/stylus/index.styl'

declare global {
    interface Window { render_app: CallableFunction }
}

window.render_app = () => {
    ReactDOM.render(<App />, document.getElementById('root'))
}
