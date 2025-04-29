import React from 'react'
import ReactDOM from 'react-dom/client'
// improt App from './App.jsx'
import App from './0429/App-fag.jsx'  /* 會先讀這個元件 */
// import './index.css'
// import './style.css'
import { BrowserRouter } from 'react-router-dom'  /* (react先關掉)先在終端機打npm i react-router-dom後，在下方打<BrowserRouter>這行就會出來 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
