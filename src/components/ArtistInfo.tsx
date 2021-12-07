import axios from "axios";
import { useQueryClient } from "react-query";
import useArtist from "../hooks/useArtist";

interface Props {
	artist: string;
	userId: string;
}

export default function ArtistInfo({ artist, userId }: Props) {
	const { data, isLoading, error } = useArtist(artist);
	const queryClient = useQueryClient();
	return (
		<div>
			{isLoading ? (
				<div>loading</div>
			) : error ? (
				<div>error</div>
			) : (
				<main>
					<div>{data?.message}</div>

					{data?.message === undefined && (
						<div>
							<div>Artist: {data?.name}</div>
							<div>Bio: {data?.bio}</div>
							<div>Listeners: {data?.listeners}</div>
							<div>Total plays: {data?.playcount}</div>
							<button
								onClick={async () => {
									await axios.put(`http://localhost:5000/userFavourites/${userId}`, {
										action: "add",
										name: data?.name,
									});
									queryClient.refetchQueries(["user", userId]);
								}}
							>
								save artist to favourites
							</button>
						</div>
					)}
				</main>
			)}
		</div>
	);
}
