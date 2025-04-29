import { ThemeProvider } from "@/components/provider/theme-provider"
import { TopNavbar } from "./components/app/top-navbar"


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <div className="flex my-3 mx-5">
          <TopNavbar />
        </div>
        {/* <Button>Button</Button> */}
      </div>
    </ThemeProvider>
  )
}

export default App
