import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { globalStyles } from "./global.styles";
const renderer = createRenderer();

renderer.renderStatic(globalStyles, 'html,body')

ReactDOM.render(
  <ErrorBoundary>
    <RendererProvider renderer={renderer}>
      <App />
    </RendererProvider>
  </ErrorBoundary>,
  document.getElementById("root")
);
