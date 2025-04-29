import { ThemeProvider } from "@/components/provider/theme-provider"
import { TopNavbar } from "./components/app/top-navbar"
import CodeEditor from "./components/code-editor/code-editor"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <div className="">
          <TopNavbar />
        </div>
        <CodeEditor />
      </div>
    </ThemeProvider>
  )
}

export default App
