import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { Provider } from 'jotai'
const renderer = createRenderer();

ReactDOM.render(
  <Provider>
    <RendererProvider renderer={renderer}>
      <App />
    </RendererProvider>
  </Provider>,
document.getElementById('root'));