import { ThemeProvider } from "@/components/provider/theme-provider"
import { Button } from "./components/ui/button"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <Button>Button</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
