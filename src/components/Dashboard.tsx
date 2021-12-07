import { useState } from "react";
import { useUser } from "../hooks/useUser";
import ArtistInfo from "./ArtistInfo";
import "./Dashboard.css";
import Favourites from "./Favourites";
import LocationInfo from "./LocationInfo";

// LASTFM api key
//f9d45957168692bb80e1b88caf973c55

// OPEN WEATHER api key
//4a74f98b8710481cf51a70339eaffaa3

interface Props {
	setToken: Function;
	userId: string;
	setUserId: Function;
}

export default function Dashboard({ setToken, userId, setUserId }: Props) {
	const [artistInput, setArtistInput] = useState("");
	const [artistName, setArtistName] = useState("");
	const [locationInput, setLocationInput] = useState("");
	const [locationName, setLocationName] = useState("");
	const { data, error, isLoading } = useUser(userId);

	return (
		<div className="main-container">
			<button
				onClick={() => {
					localStorage.clear();
					setToken(null);
					setUserId(null);
				}}
			>
				logout
			</button>
			{isLoading ? (
				<div>loading</div>
			) : error ? (
				<div>error</div>
			) : (
				<div>WELCOME {data.name}</div>
			)}
			<LocationInfo
				savedLocation={data?.location}
				location={locationName}
				userId={userId}
			/>
			<div className="search-container">
				<input
					className="search-bar"
					placeholder="Your city"
					onChange={(e) => setLocationInput(e.target.value)}
					value={locationInput}
				></input>
				<button
					className="search-button"
					onClick={async () => {
						setLocationName(locationInput);
					}}
				>
					Okini Lokaciju
				</button>
			</div>
			<div className="search-container">
				<input
					className="search-bar"
					placeholder="Artist name"
					onChange={(e) => setArtistInput(e.target.value)}
					value={artistInput}
				></input>
				<button
					className="search-button"
					onClick={async () => {
						setArtistName(artistInput);
					}}
				>
					Okini Artista
				</button>
			</div>

			{isLoading ? (
				<div>Loading Favourites</div>
			) : (
				<Favourites favourites={data.artists} userId={userId} />
			)}
			<br />
			<ArtistInfo artist={artistName} userId={userId} />
		</div>
	);
}
