import "./App.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import MovieLists from "./pages/MovieLists";
import SidebarLayout from "./SidebarLayout";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/movie",
      element: <SidebarLayout />,
      children: [
        {
          path: "/movie/all",
          element: <MovieLists />,
        },
        {
          path: "/movie/id",
          element: <MovieDetails />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/all" element={<MovieLists />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
