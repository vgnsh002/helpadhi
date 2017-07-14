import React from 'react'; 
import DisplayComp from './Display.js';
import ReactDOM from 'react-dom';

    class AppComp extends React.Component {
	constructor(props){
	super(props);
	this.handleClick=this.handleClick.bind(this);
	this.state={counter:0};
	}
	handleClick(){
	this.setState({counter:this.state.counter+1});}
   render(){
		return( 
			<div>
				<div><img src='http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg'/></div>
				Like:<button onClick={this.handleClick}>{this.state.counter}</button>
				<DisplayComp new={this.state.counter}/>
				<textarea>Comment</textarea>
			</div>)
			}			
}

export default AppComp;


