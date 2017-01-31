import React, { Component } from 'react';
import $ from 'jquery';

export default class ArtistContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			artist: '',
		}
	}

	componentDidMount() {
		$.get('http://ws.audioscrobbler.com/2.0/?method=artist.getSimilar&artist=cher&api_key=322a57c22e2af082f475e780809593d4').then(res => {
			console.log(res);
			this.setState({
				artist: 'res',
			});
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div></div>
				</div>
			</div>
		);
	}
}