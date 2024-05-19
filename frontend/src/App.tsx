import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";



export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  

  return (
    <RouterProvider
    router={router}
    // fallbackElement={<BigSpinner />}
  />
  )
}
