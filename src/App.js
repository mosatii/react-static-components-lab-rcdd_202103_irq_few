import React, { Component } from 'react';
import GraceHopperQuoteComponent from './src/GraceHopperQuoteComponent'
import CatComponent from './src/CatComponent'
class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
