import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ''};
	}
	render() {
		return (
			<div className="search-bar">
			<div className="jumbotron">
				<h1>React Testing Grounds</h1>
			</div>
			<input placeholder="Enter a video you'd like to search for" 
				value={this.state.term}
			onChange={event => 
				{	
					this.onInputChange(event.target.value);
				}
			}/><button className="btn btn-info">Search</button> 
			</div>
		);
	}
	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
