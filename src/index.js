import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';//, push

import reducers from './reducers'; // Or wherever you keep your reducers

import registerServiceWorker from './registerServiceWorker';

import './assets/styles/index.css';

import App from './containers/App'


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers( applyMiddleware(middleware) )
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const root=document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        {/* <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/> */}
        <App/>
      </div>
    </ConnectedRouter>
  </Provider>,
  root
);

registerServiceWorker();