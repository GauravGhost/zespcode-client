import { ThemeProvider } from "@/components/provider/theme-provider"
import { TopNavbar } from "./components/app/top-navbar"
import ProblemList from "./pages/problem-list/ProblemList"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen">
        <div className="flex item-center h-[8vh]">
          <TopNavbar />
        </div>
        <div className="overflow-hidden h-[92vh]">
          {/* <Problem /> */}
          <ProblemList />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
