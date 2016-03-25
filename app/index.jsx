import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Clients from './components/Clients.jsx';
import Contact from './components/Contact.jsx';

var Routes = props => (
	<Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
		<Route path='/' component={Main}>
		  <IndexRoute component={Home}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/clients' component={Clients}/>
      <Route path='/contact' component={Contact}/>
    </Route>
	</Router>
);

ReactDOM.render(<Routes/>, document.getElementById('app'));
