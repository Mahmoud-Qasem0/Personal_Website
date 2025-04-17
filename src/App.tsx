import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
