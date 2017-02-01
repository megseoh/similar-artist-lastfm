import React from 'react';

export default function Artist({
	artist
}) {
	return (
		<div>
			<h3>{ artist.name }</h3>
			<img src={ artist.image } alt={ artist.name } />
		</div>
	);
}



// const Artist = (props) => (
// 	<div>
// 		<h3>{ props.name }</h3>
// 		<img src={ props.image } alt={ props.name } />
// 	</div>
// );

// export default Artist;