import type { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routing from '@/router/Routing'
import { GlobalStyles } from '@/ui'
import { theme } from '@/lib/theme'

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
