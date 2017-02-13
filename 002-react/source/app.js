import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron'

export default class App extends React.Component{
	render(){
		return <Jumbotron className="jumbotron jumbotron-fulid text-xs-center" style={{backgroundImage:'url(img/forest-1198698_1280.jpg)',color:'white'}}>
			<div className="container">
				<h1>Building React.js User Interfaces</h1>
				<p>with Bootstrap and SASS.</p>
				<p><Button className="btn-primary" href="http://02geek.com/" target="_blank" disabled />
				<Button className="-danger-outline -sm" disabled />

				</p>
				<Button className="-primary-outline -lg -block" disabled />
			</Jumbotron>
		</div>;
	}

}