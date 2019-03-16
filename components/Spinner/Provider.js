import React, { useState, createContext } from 'react'

const initialState = {
  showSpinner: false,
  toggleSpinner: () => {}
}

export const SpinnerContext = createContext(initialState)

export default function SpinnerProvider({ children }) {
  const [ provider, setProvider ] = useState({
    showSpinner: false,
    toggleSpinner: () => setProvider({
      ...provider,
      showSpinner: !provider.showSpinner
    })
  })

  return (
    <SpinnerContext.Provider value={provider}>
      { children }
    </SpinnerContext.Provider>
  )
}