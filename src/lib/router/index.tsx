import App from "@/App";
import ProblemList from "@/pages/problem-list/ProblemList";
import Problem from "@/pages/problem/Problem";

const routers = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/problems",
    element: <ProblemList />
  },
  {
    path: "/problems/:id",
    element: <Problem />
  }
]

export default routers;