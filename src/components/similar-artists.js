import React from 'react';
import './similar-artists.css'

const SimilarArtists = (props) => (
	<div className="new-artist">
		<h2>{ props.name }</h2>
		<img src={ props.image } alt={ props.name } />
	</div>
);

export default SimilarArtists;