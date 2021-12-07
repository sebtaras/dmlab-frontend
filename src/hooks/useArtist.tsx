import axios from "axios";
import { useQuery } from "react-query";

type Response = {
	name?: string;
	bio?: string;
	error?: number;
	message?: string;
	listeners?: number;
	playcount?: number;
	image?: string;
	url?: string;
};

const getArtistInfo = async (name: string): Promise<Response> => {
	if (name === "") {
		return {
			error: 1,
			message: "No artist provided",
		};
	}

	const { data } = await axios.get(
		`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name.trim()}&api_key=f9d45957168692bb80e1b88caf973c55&format=json`
	);
	return {
		name: data.artist.name,
		bio: data.artist.bio.summary,
		listeners: data.artist.stats.listeners,
		playcount: data.artist.stats.playcount,
		image: data.artist.image[3]["#text"],
		url: data.artist.url,
	};
};

export default function useArtist(name: string) {
	return useQuery(["artist", name], () => getArtistInfo(name));
}
