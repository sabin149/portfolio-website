import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useNavigate,
} from "react-router-dom";
import RootLayout from "Layouts/RootLayout";
import Home from "pages/Home";
import { lazy, Suspense } from "react";
import PageNotFound from "pages/PageNotFound";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/Common/ErrorFallback";

const AboutMe = lazy(() => import("pages/AboutMe"));
const Contact = lazy(() => import("pages/Contact"));
const MediaCoverage = lazy(() => import("pages/MediaCoverage"));
const AllArticles = lazy(() => import("pages/AllArticles"));
const ContentCreation = lazy(() => import("pages/ContentCreation"));
const VoiceOver = lazy(() => import("pages/VoiceOver"));
const InformationTechnology = lazy(() => import("pages/InformationTechnology"));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route
        path="about-me"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              const navigate = useNavigate();
              navigate("/");
            }}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              {" "}
              <AboutMe />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="contact"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              const navigate = useNavigate();
              navigate("/");
            }}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <Contact />{" "}
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="media-coverage"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              const navigate = useNavigate();
              navigate("/");
            }}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <MediaCoverage />{" "}
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="all-articles"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              const navigate = useNavigate();
              navigate("/");
            }}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <AllArticles />{" "}
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="information-technology"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              const navigate = useNavigate();
              navigate("/");
            }}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <InformationTechnology />{" "}
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="voice-over"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              const navigate = useNavigate();
              navigate("/");
            }}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <VoiceOver />{" "}
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path="content-creation"
        element={
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              const navigate = useNavigate();
              navigate("/");
            }}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              {" "}
              <ContentCreation />
            </Suspense>
          </ErrorBoundary>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Router;
