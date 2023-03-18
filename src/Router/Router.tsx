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
import Blogs from "pages/Blogs";
import AllArticles from "pages/AllArticles";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="media-coverage" element={<MediaCoverage />} />
      <Route path="all-articles" element={<AllArticles />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Router;
