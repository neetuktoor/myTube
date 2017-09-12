import React, { Component } from 'react';

// user types input, this will create a request from api, will update list of videos on side

class SearchBar extends Component {
	//initialize state
	constructor(props) {
		//calling parent method
		super(props);

		//this will be updated with value of input, triggered by onChange event
		//constructor function -- where state is changed
		this.state = { term: ''};
	}

 	render() {
 		// define input handler onChange (function) passed to property onchange (inside jsx tag)
 		return (
 			<div className="search-bar">

 				<input 
 				value={this.state.term}
 				onChange={event => this.onInputChange(event.target.value)} />
 				
 			</div>
 		);
 	}

 	onInputChange(term) {
 		this.setState({term});
 		this.props.onSearchTermChange(term);
 	}
}

export default SearchBar;