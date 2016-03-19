var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = ReactRouter.hashHistory;

var Main = require('./components/Main.jsx');
var Home = require('./components/Home.jsx');
var Blog = require('./components/Blog.jsx');
var Clients = require('./components/Clients.jsx');
var Contact = require('./components/Contact.jsx');

var Routes = props => (
	<Router history={history}>
		<Route path='/' component={Main}>
		  <IndexRoute component={Home}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/clients' component={Clients}/>
      <Route path='/contact' component={Contact}/>
    </Route>
	</Router>
);

ReactDOM.render(<Routes/>, document.getElementById('app'));
