import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
// import Contact from "../pages/Contact";
import RootThings from "../layout/RootThings";
import Home from "../components/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootThings></RootThings>,
    children: [
      {
        index: true,
        Component: Home,
      }
    ],
  },
]);

export default router;
