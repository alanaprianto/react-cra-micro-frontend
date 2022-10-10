import React from "react";
import "./App.css";

const Blog = React.lazy(() => import("blog/App"));

function App() {
  return (
    <>
      <h2>This is from portal project</h2>
      <React.Suspense fallback={"loading..."}>
        <Blog />
      </React.Suspense>
    </>
  );
}

export default App;
