import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "Layouts/RootLayout";
import Home from "pages/Home";
import PageNotFound from "pages/PageNotFound";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<h1>About Page</h1>} />
      <Route path="contact" element={<h1>Contact Page</h1>} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Router;
