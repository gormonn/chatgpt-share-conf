import React from 'react'
import ReactDOM from 'react-dom/client'
import { NewTab } from 'src/newtab/NewTab'
import 'src/newtab/index.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>,
)
