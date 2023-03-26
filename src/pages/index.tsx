import Home from 'layout/Home'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default HomePage
