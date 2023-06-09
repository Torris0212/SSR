/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axiosInstance.get('/users');

            case 2:
              res = _context.sent;


              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axiosInstance.get('/currentUser');

            case 2:
              res = _context2.sent;

              // console.log(res);
              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _routes = __webpack_require__(18);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  console.log('app');
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _routes2.default.map(function (route, index) {
        return _react2.default.createElement(_reactRouterDom.Route, { exact: route.exact, path: route.path, component: route.component, key: index });
      }),
      _react2.default.createElement(
        _reactRouterDom.Route,
        null,
        _react2.default.createElement(
          'div',
          null,
          'Did not match any route for provided path.'
        )
      )
    )
  );
};

exports.default = App;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(9);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(12);

var _createStore2 = _interopRequireDefault(_createStore);

var _routes = __webpack_require__(18);

var _routes2 = _interopRequireDefault(_routes);

var _expressHttpProxy = __webpack_require__(22);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _reactRouterConfig = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:1000';
    return opts;
  }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  // figure out what component would have rendered then call a 'loadData' method attached to each of the component passing in store
  // loadData method will dispatch action manually
  // return a promise
  // wait for promise to resolve
  // render app
  var promises = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  });
});

app.listen('1000', function () {
  console.log('listening on port 1000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouter = __webpack_require__(11);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = function renderer(req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { location: req.path },
      _react2.default.createElement(_App2.default, null)
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <!doctype html>\n    <html lang="en">\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

exports.default = renderer;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(13);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(14);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _usersReducer = __webpack_require__(15);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(16);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  users: _usersReducer2.default,
  auth: _authReducer2.default
});

exports.default = reducers;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(1);

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _index.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

exports.default = usersReducer;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

var authReducers = function authReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};

exports.default = authReducers;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(19);

var _Home2 = _interopRequireDefault(_Home);

var _Users = __webpack_require__(20);

var _Users2 = _interopRequireDefault(_Users);

var _routeLoaders = __webpack_require__(21);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  path: '/',
  exact: true,
  component: _Home2.default
}, {
  path: '/users',
  component: _Users2.default,
  loadData: _routeLoaders.loadUsersData
}];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "div",
    null,
    "Home"
  );
};

exports.default = Home;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Users;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Users() {
  var users = (0, _reactRedux.useSelector)(function (state) {
    return state.users;
  });

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        "title",
        null,
        "Users List"
      ),
      _react2.default.createElement("meta", { property: "og:title", content: "Users" })
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Here's a big list of users"
    ),
    _react2.default.createElement(
      "ul",
      null,
      users.map(function (user, index) {
        return _react2.default.createElement(
          "li",
          { key: index },
          user.name
        );
      })
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAuthData = exports.loadUsersData = undefined;

var _index = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var loadUsersData = exports.loadUsersData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(store) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(222);
            return _context.abrupt("return", store.dispatch((0, _index.fetchUsers)()));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function loadUsersData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var loadAuthData = exports.loadAuthData = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(store) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(1111);
            return _context2.abrupt("return", store.dispatch((0, _index.fetchCurrentUser)()));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function loadAuthData(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);