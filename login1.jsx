import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import BasicExample from './app.jsx';
    class Login extends React.Component {
	 constructor(props) {
      super(props);
		
      this.state = {
         data: {name: '', password: ''}
      }
this.setEmpState = this.setEmpState.bind(this);
this.handleLogin = this.handleLogin.bind(this);

   };


setEmpState(e){
var field = e.target.name;
var value = e.target.value;

this.state.data[field] = value;

return this.setState({data: this.state.data});
}

	handleLogin(e) {

e.preventDefault();
if((this.refs.username.value=="") || (this.refs.password.value==""))
{
alert("Please enter data");
  
}
		
else{
			this.props.history.push('/home/'+this.refs.username.value);
		}
	}
	
	
		render(){
			return(
			<form>
				<div>
					<h1>Login Form</h1>
					<label>
						<span>UserName:</span><input id="name" ref="username" type="text" name="username" onChange = {this.setEmpState}/><br/>
					</label>
					<label>
						<span>Password:</span><input id="password" ref="password" type="password" name="password" onChange = {this.setEmpState}/>
					</label><br/>
					
					<input type="button" value="Submit Form" onClick = {this.handleLogin}/>
				
				</div>
			</form>
				
			)
		}
} ;

export default Login;


