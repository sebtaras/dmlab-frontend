export const responseFacebook = (response: any) => {
	return {
		name: response.name,
		email: response.email,
	};
};
