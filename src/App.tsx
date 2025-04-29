import { ThemeProvider } from "@/components/provider/theme-provider"
import { TopNavbar } from "./components/app/top-navbar"
// import CodeEditor from "./components/code-editor/code-editor"
import Problem from "./pages/problem/Problem"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen">
        <div>
          <TopNavbar />
        </div>
        <div className="flex-1 overflow-hidden">
          <Problem />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
