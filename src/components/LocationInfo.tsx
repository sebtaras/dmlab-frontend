import axios from "axios";
import React from "react";
import { useQueryClient } from "react-query";
import useLocation from "../hooks/useLocation";

interface Props {
	location: string;
	savedLocation: string;
	userId: string;
}

export default function LocationInfo({ location, userId, savedLocation }: Props) {
	const { data, isLoading, error } = useLocation(
		location !== "" ? location : savedLocation
	);
	return (
		<div>
			{isLoading ? (
				<div>loading</div>
			) : error ? (
				<div>Recieved error for provided location: {location} </div>
			) : (
				<main>
					<div>{data?.message}</div>
					{data?.message === undefined && (
						<div>
							<div>
								Temperature for {location !== "" ? location : savedLocation}:{" "}
								{data?.temperature}
							</div>
							<button
								onClick={async () => {
									if (location !== "") {
										await axios.put(`http://localhost:5000/userLocation/${userId}`, {
											location,
										});
									}
								}}
							>
								Save location
							</button>
						</div>
					)}
				</main>
			)}
		</div>
	);
}
