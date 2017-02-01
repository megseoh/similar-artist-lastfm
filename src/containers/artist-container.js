import React, { Component } from 'react';
import $ from 'jquery';
import Artist from '../components/artist.js';

export default class ArtistContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			artistList: [],
		}
	}

	SIMILAR_ARTIST_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&api_key=322a57c22e2af082f475e780809593d4&format=json&limit=5&artist=cher';

	componentDidMount() {
		$.get(this.SIMILAR_ARTIST_URL).then(res => {
			var artistArray = res.similarartists.artist;
			console.log(artistArray);
			this.setState({
				artistList: 'res',
			});
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h2>Artist List</h2>
					{this.state.artistList.map(artist =>
						<Artist
							key={artist.name}
							name={artist.name}
							image={artist.image}
						/>)}
				</div>
			</div>
		);
	}
}