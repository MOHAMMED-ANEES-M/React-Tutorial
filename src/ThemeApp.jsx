import React from 'react'
import ThemeProvider from './ThemeProvider'
import ThemedComponent from './ThemedComponent'

const ThemeApp = () => {
  return (
    <ThemeProvider>
    <div>
      <ThemedComponent/>
    </div>
    </ThemeProvider>

  )
}

export default ThemeApp
