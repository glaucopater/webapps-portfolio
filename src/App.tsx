import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import SitesDashboard from './components/SitesDashboard'
import TokenInput from './components/TokenInput'
import './App.css'

const queryClient = new QueryClient()

function App() {
  const [token, setToken] = useState('')

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Netlify Sites Dashboard</h1>
        <TokenInput onTokenSubmit={setToken} />
        {token && <SitesDashboard token={token} />}
      </div>
    </QueryClientProvider>
  )
}

export default App