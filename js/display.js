import React from 'react'; 
import AppComp from './App.js';
    class DisplayComp extends React.Component {
	render(){
		return( 
			<p>{"No.of Likes "}{this.props.new}</p>)
			}
	}
	
	export default DisplayComp;
