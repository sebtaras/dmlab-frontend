import React from "react";

interface Props {
	favourites: [string];
}

export default function Favourites({ favourites }: Props) {
	return (
		<div className="">
			{favourites.length > 0 ? (
				<div>Your Favourites:</div>
			) : (
				<div>Favourite artists will be displayed here</div>
			)}
			{favourites.map((favourite, index) => {
				return <div key={index}>{favourite}</div>;
			})}
		</div>
	);
}
