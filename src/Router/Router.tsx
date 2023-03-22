import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "Layouts/RootLayout";
import Home from "pages/Home";
import { lazy } from "react";

const AboutMe = lazy(() => import("pages/AboutMe"));
const Contact = lazy(() => import("pages/Contact"));
const MediaCoverage = lazy(() => import("pages/MediaCoverage"));
const AllArticles = lazy(() => import("pages/AllArticles"));
const ContentCreation = lazy(() => import("pages/ContentCreation"));
const VoiceOver = lazy(() => import("pages/VoiceOver"));
const InformationTechnology = lazy(() => import("pages/InformationTechnology"));

const check = false;
const PageNotFound = lazy(() => {
  if (check) {
    return import("pages/PageNotFound");
  }
  return import("pages/Home");
});

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="contact" element={<Contact />} />
      <Route path="media-coverage" element={<MediaCoverage />} />
      <Route path="all-articles" element={<AllArticles />} />
      <Route
        path="information-technology"
        element={<InformationTechnology />}
      />
      <Route path="voice-over" element={<VoiceOver />} />
      <Route path="content-creation" element={<ContentCreation />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Router;
