import $ from 'jquery';

const SIMILAR_ARTIST_URL = 'http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&limit=3&api_key=322a57c22e2af082f475e780809593d4&format=json';

module.exports = {
	getArtists(newArtist) {
		let encodedArtist = encodeURIComponent(newArtist);
		let requestURL = `${SIMILAR_ARTIST_URL}&artist=${encodedArtist}`;

		return $.get(requestURL).then(res => {
			var similarArtistArray = res.similarartists.artist;
			return similarArtistArray;
		}, res => {
			throw new Error(res.message);
		});
	}
}