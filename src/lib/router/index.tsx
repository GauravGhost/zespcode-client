import { ProblemLayout } from "@/components/layout/ProblemLayout";
import { RootLayout } from "@/components/layout/RootLayout";
import ProblemList from "@/pages/problem-list/ProblemList";
import Problem from "@/pages/problem/Problem";

const routers = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <ProblemList />
      },
      {
        path: "problems",
        element: <ProblemList />
      }
    ]
  },
  {
    path: "problems/:id",
    element: <ProblemLayout />,
    children: [
      {
        path: "",
        element: <Problem />
      }
    ]
  }
]

export default routers;
