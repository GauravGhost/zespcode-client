import { TopNavbar } from "./components/app/top-navbar"
import ProblemList from "./pages/problem-list/ProblemList"

function App() {
  return (
      <div className="flex flex-col h-screen">
        <div className="flex item-center h-[8vh]">
          <TopNavbar />
        </div>
        <div className="overflow-hidden h-[92vh]">
          {/* <Problem /> */}
          <ProblemList />
        </div>
      </div>
  )
}

export default App
