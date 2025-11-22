import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import './index.css'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-area">
        <Topbar />
        <div className="content-wrap">
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App