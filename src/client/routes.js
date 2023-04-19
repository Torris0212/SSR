import Home from './views/Home';
import Users from './views/Users';
import  { loadUsersData, loadAuthData } from '../client/routeLoaders';
import App from './App';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/users',
    component: Users,
    loadData: loadUsersData
  }
]
