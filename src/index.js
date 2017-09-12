//imports react into file from node_modules (go to import statements for more)
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
const API_KEY = 'AIzaSyDMBMP7hVEwsNA05km7REg1MiW1NQobS-0';

//makes a call to API


// create a new component. This component should produce some HTML
//const will never change. just a function that returns jsx
//parents component
//this will keep track of list of videos by recording the on state
class App extends Component {
	constructor(props){
		super(props);

		this.state= { 
			videos : [], 
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0] 
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					//being passed as a property
					onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

//take this component's generted html, and put it in the dom (on the page)
//<App /> creates an instance of class, basically just put name in jsx tags
//need to add a , and include which container to render to
ReactDom.render(<App/>, document.querySelector('.container'));