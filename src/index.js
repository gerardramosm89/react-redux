import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCW3cWPx6LtPMI7VQS9Wnd_OPaNWiQ18Rk';

YTSearch({ key: API_KEY, term: 'surfboards'}, data => {
	console.log(data);	
});

//Create a new Component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return( 
			<div>
				<SearchBar />
			</div>
		);
	}
}

// Take this component's generated HTMl and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
