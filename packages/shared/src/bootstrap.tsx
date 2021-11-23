import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createRenderer } from "fela";
import { RendererProvider } from "react-fela";
import { globalStyles } from './global.styles';
const renderer = createRenderer();

renderer.renderStatic(globalStyles, 'html,body')

ReactDOM.render(
  <RendererProvider renderer={renderer}>
    <App />
  </RendererProvider>,
document.getElementById('root'));