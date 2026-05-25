import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./Layout.tsx";
import JobForm from "./pages/JobForm.tsx";
import JobPage from "./pages/JobPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Signup from "./pages/SignUpPage.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/notfound",
    element: <NotFoundPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/jobs",
        element: <JobForm addJob={(job: any) => console.log(job)} />,
      },
      {
        path: "/jobs/:id",
        element: <JobPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
