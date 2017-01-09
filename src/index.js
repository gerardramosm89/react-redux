import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCW3cWPx6LtPMI7VQS9Wnd_OPaNWiQ18Rk';


//Create a new Component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			videos: [],
			selectedVideo: null
			 };
		YTSearch({ key: API_KEY, term: 'pokemon'}, videos => {
  		this.setState({ 
				videos: videos,
				selectedVideo: videos[0] });	
		});
	}
	render() {
		return( 
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// Take this component's generated HTMl and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
