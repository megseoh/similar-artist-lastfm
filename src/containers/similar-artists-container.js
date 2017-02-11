import React, { Component } from 'react';
import $ from 'jquery';
import Artist from '../components/artist.js';
import ArtistForm from '../components/artist-form.js';
import SimilarArtists from '../components/similar-artists.js';
import SimilarArtistsURL from '../consts/similar-artists-url.jsx';
import './similar-artists-container.css';

const formInitialState = {
	name: ''
};

export default class ArtistContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentArtist: 'Cher',
			artistList: [],
			form: formInitialState,
		}

		this.handleSearch = this.handleSearch.bind(this);
	}

	SIMILAR_ARTIST_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&limit=3&api_key=322a57c22e2af082f475e780809593d4&format=json';

	componentDidMount() {
		let encodedArtist = encodeURIComponent(this.state.currentArtist);
		// console.log(encodedArtist);
		let requestURL = `${this.SIMILAR_ARTIST_URL}&artist=${encodedArtist}`;
		// console.log(requestURL);

		$.get(requestURL).then(res => {
			// console.log(this.state.currentArtist);
			var similarArtistArray = res.similarartists.artist;
			// console.log(similarArtistArray);
			this.setState({
				artistList: similarArtistArray,
			});
		});
	}

	handleSearch(newArtist) {
		console.log(newArtist + ' inside handleSearch');
		SimilarArtistsURL.getArtists(newArtist).then(similarArtistArray => {
			this.setState({
				currentArtist: newArtist,
				artistList: similarArtistArray
			})
		}, errorMessage => {
			alert(`Sorry we can't find that artist, please search for another`);
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<h3>If you love...</h3>
					<Artist artist={ this.state.currentArtist } />
					<ArtistForm onSearch={ this.handleSearch } />
					<h3>You should try...</h3>
					<div className="artist-container">
					{ this.state.artistList.map(artistInfo => (
						<SimilarArtists
							key={ artistInfo.name }
							name={ artistInfo.name }
							image={ artistInfo.image.find(imageData => imageData.size === 'extralarge')['#text'] }
						/>))}
					</div>
				</div>
			</div>
		);
	}
}