import axios from "axios";
import { useQuery } from "react-query";

type Response = {
	error?: number;
	message?: string;
	temperature?: number;
};

const getLocationInfo = async (name: string): Promise<Response> => {
	if (name === "") {
		return {
			error: 1,
			message: "No location provided",
		};
	}
	const { data } = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${name.trim()}&units=metric&APPID=4a74f98b8710481cf51a70339eaffaa3`
	);

	console.log(data);

	return {
		temperature: data.main.temp,
	};
};

export default function useLocation(name: string) {
	return useQuery(["location", name], () => getLocationInfo(name));
}
