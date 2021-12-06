import axios from "axios";

export const responseFacebook = (response: any) => {
	console.log(response);
	if (response.id !== undefined) {
		axios
			.post("http://localhost:5000/register", {
				id: response.id,
				name: response.name,
				email: response.email,
			})
			.then((result) => {
				console.log(result);
			});
	}
	return {
		name: response.name,
		email: response.email,
	};
};
