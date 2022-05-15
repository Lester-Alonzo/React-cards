import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ContextDataProvider  from './context/contextData.jsx'
import ContextPracticeProvider  from './context/contextPractice.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<ContextPracticeProvider>
    <ContextDataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextDataProvider>
</ContextPracticeProvider>
)
