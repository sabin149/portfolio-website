import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "Layouts/RootLayout";
import Home from "pages/Home";
import PageNotFound from "pages/PageNotFound";
import AboutMe from "pages/AboutMe";
import Contact from "pages/Contact";
import MediaCoverage from "pages/MediaCoverage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="contact" element={<Contact />} />
      <Route path="media-coverage" element={<MediaCoverage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Router;
