import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Welcome from './components/welcome';
import Supplier from './components/forms/supplier';
import GRN from './components/forms/grn';
import DeliveryChallan from './components/forms/deliverychallan';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App} path="/">
        <IndexRoute component={Welcome} />
        <Route component={Supplier} path="suppliers" />
        <Route component={GRN} path="grn" />
        <Route component={DeliveryChallan} path="deliverychallan" />
      </Route>
    </Router>
  </Provider>, document.querySelector('.container'));
