import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.tsx";
import Layout from "./Layout.tsx";
import JobForm from "./pages/JobForm.tsx";
import JobPage from "./pages/JobPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import LogInPage from "./pages/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/notfound",
    element: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/jobs",
        element: <JobForm addJob={(job: any) => console.log(job)} />,
      },
      {
        path: "/jobs/:status",
        element: <JobPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
