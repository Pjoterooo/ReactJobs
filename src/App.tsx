import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "../pages/HomePage";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      <Route element={<HomePage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
