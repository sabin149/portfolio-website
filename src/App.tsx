import { RouterProvider } from "react-router-dom";
import Router from "Router/Router";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/Common/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense
        fallback={
          <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-white"></div>
          </div>
        }
      >
        <RouterProvider router={Router} />
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
