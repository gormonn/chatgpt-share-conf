import React from 'react'
import ReactDOM from 'react-dom/client'
import { SidePanel } from 'src/sidepanel/SidePanel'
import 'src/sidepanel/index.css'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <SidePanel />
  </React.StrictMode>,
)
