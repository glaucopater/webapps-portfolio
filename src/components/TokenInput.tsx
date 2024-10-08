import React, { useState } from 'react'

interface TokenInputProps {
  onTokenSubmit: (token: string) => void
}

const TokenInput: React.FC<TokenInputProps> = ({ onTokenSubmit }) => {
  const [inputToken, setInputToken] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onTokenSubmit(inputToken)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputToken}
        onChange={(e) => setInputToken(e.target.value)}
        placeholder="Enter your Netlify access token"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TokenInput