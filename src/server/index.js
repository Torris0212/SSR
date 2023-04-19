import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import routes from '../client/routes';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:1000';
      return opts;
    }
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  // figure out what component would have rendered then call a 'loadData' method attached to each of the component passing in store
  // loadData method will dispatch action manually
  // return a promise
  // wait for promise to resolve
  // render app
  const promises = matchRoutes(routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen('1000', () => {
  console.log('listening on port 1000');
})
