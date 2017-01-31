import React, { Component } from 'react';
import $ from 'jquery';

export default class CharacterContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			character: '',
		}
	}

	componentDidMount() {
		$.get('').then(res => {
			console.log(res);
			this.setState({
				character: 'Some text here',
			});
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div character={ this.state.character }>Fuck</div>
				</div>
			</div>
		);
	}
}