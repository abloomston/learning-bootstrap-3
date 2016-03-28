import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Clients from './components/Clients.jsx';
import ContactContainer from './containers/ContactContainer.jsx';

const Routes = props => (
	<Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
		<Route path='/' component={Main}>
		  <IndexRoute component={Home}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/clients' component={Clients}/>
      <Route path='/contact' component={ContactContainer}/>
    </Route>
	</Router>
);

ReactDOM.render(<Routes/>, document.getElementById('app'));
