import axios from "axios";
import { useQuery } from "react-query";

type Response = {
	error?: number;
	message?: string;
	artists?: [string];
	location?: null | string;
};

const getUser = async (id: string): Promise<Response> => {
	if (id === "") {
		return {
			error: 1,
			message: "No user provided",
		};
	}
	const { data } = await axios.get(`http://localhost:5000/user/${id}`);
	console.log(data);

	return {
		artists: data.artists,
		location: data.location,
	};
};

export function useUser(id: string): any {
	return useQuery(["user", id], () => getUser(id));
}
