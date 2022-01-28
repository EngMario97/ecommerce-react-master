import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import Pages from './routes/index.routes';

ReactDOM.render(
    <BrowserRouter>
      <Pages />
    </BrowserRouter>,
  document.getElementById('root')
);
