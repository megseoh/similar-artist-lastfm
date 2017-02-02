import React, { Component } from 'react';
import $ from 'jquery';
import Artist from '../components/artist.js';
import SimilarArtists from '../components/similar-artists.js';
import './similar-artists-container.css';

const formInitialState = {
	name: ''
};

export default class ArtistContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			artist: 'Cher',
			artistList: [],
			form: formInitialState,
		}
	}

	SIMILAR_ARTIST_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&limit=3&api_key=322a57c22e2af082f475e780809593d4&format=json&artist=cher';

	componentDidMount() {
		$.get(this.SIMILAR_ARTIST_URL).then(res => {
			var artistArray = res.similarartists.artist;
			console.log(artistArray);
			this.setState({
				artistList: artistArray,
			});
		});
	}



	render() {
		return (
			<div className="container">
				<div className="row">
					<h3>If you love...</h3>
					<Artist artist={ this.state.artist } />
			  	<form onSubmit={ this.handleSubmit } >
			  		<label>
			  			Enter artist's name:
				  		<input type="text" value={ this.state.form.name } onChange={ this.handleChange } placeholder="eg. Cher" />
			  		</label>
			  		<input type="submit" value="Submit" />
		  		</form>
					<h3>You should try...</h3>
					<div className="artist-container">
					{this.state.artistList.map(artistInfo => (
						<SimilarArtists
							key={artistInfo.name}
							name={artistInfo.name}
							image={artistInfo.image.find(imageData => imageData.size === 'extralarge')['#text']}
						/>))}
					</div>
				</div>
			</div>
		);
	}
}