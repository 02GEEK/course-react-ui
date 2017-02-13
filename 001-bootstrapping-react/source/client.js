import React from 'react';
import ReactDOM from 'react-dom';

const component = <div className="jumbotron jumbotron-fulid text-xs-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)',color:'white'}}>
			<div className="container">
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS.</p>
				<p><a className="btn btn-primary" href="http://02geek.com/" target="_blank">Discover things.</a></p>
			</div>
		</div>;

ReactDOM.render(component,document.getElementById('react'));

