import axios from "axios";
import React from "react";
import { useQueryClient } from "react-query";
import "./Favourites.css";

interface Props {
	userId: string;
	favourites: [string];
}

export default function Favourites({ favourites, userId }: Props) {
	const queryClient = useQueryClient();
	return (
		<div>
			{favourites.length > 0 ? (
				<div>Your Favourites:</div>
			) : (
				<div>Favourite artists will be displayed here</div>
			)}
			<div className="favourites-container">
				{favourites.map((favourite, index) => {
					return (
						<div className="favourite-container" key={index}>
							<div className="favourite">{favourite}</div>
							<button
								onClick={async () => {
									await axios.put(`http://localhost:5000/userFavourites/${userId}`, {
										action: "remove",
										name: favourite,
									});
									queryClient.refetchQueries(["user", userId]);
								}}
							>
								Remove
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
