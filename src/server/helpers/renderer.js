import React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from "react-redux";
import { Helmet } from "react-helmet";
import App from '../../client/App';

const renderer = (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return (`
    <!doctype html>
    <html lang="en">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${JSON.stringify(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `)
}

export default renderer;
