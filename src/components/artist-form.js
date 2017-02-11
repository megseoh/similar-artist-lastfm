import React, { Component } from 'react';

export default class ArtistForm extends Component {

	handleSubmit(event) {
		event.preventDefault();

		let newArtist = this.refs.currentArtist.value;

		if (newArtist.length > 0) {
			// how do i clear this out without making it undefined??
			// this.refs.currentArtist = '';
			this.props.onSearch(newArtist);
		}
	}

	render() {
		return (
			<div>
		  	<form onSubmit={ this.handleSubmit.bind(this) } >
		  		<label>
		  			Enter artist's name:
			  		<input type="text" ref="currentArtist" placeholder="eg. Cher" />
		  		</label>
		  		<input type="submit" value="Submit" />
	  		</form>
			</div>
		);
	}
}