import React from 'react';

const Artist = (props, i) => (
	<div>
		<h3>{ props.i.name }</h3>
		<img src={ props.i.image } alt={ props.i.name } />
	</div>
);

export default Artist;