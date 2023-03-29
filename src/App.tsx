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
          <div className="fixed top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-50">
            <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-indigo-500"></div>
            <h2
              className="mt-3 ml-4 block animate-pulse text-2xl
            font-semibold tracking-wide
            text-gray-700
              
            "
            >
              Loading...
            </h2>
          </div>
        }
      >
        <RouterProvider router={Router} />
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
