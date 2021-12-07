import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { useNavigate } from "react-router";
interface Props {
	setToken: any;
	setUserId: any;
}

export default function LoginForm({ setToken, setUserId }: Props) {
	const navigate = useNavigate();

	const responseFacebook = async (fbResponse: any) => {
		if (fbResponse.id !== undefined) {
			let result = await axios.post("http://localhost:5000/login", {
				id: fbResponse.id,
				name: fbResponse.name,
				email: fbResponse.email,
			});
			localStorage.setItem("accessToken", fbResponse.accessToken);
			localStorage.setItem("userId", fbResponse.id);
			setToken(fbResponse.accessToken);
			setUserId(result.data.id);
			navigate("/");
		}
		return {
			name: fbResponse.name,
			email: fbResponse.email,
		};
	};

	return (
		<div>
			<FacebookLogin
				appId="593305985236111"
				fields="name,email,picture"
				callback={responseFacebook}
				cssClass="app"
			/>
		</div>
	);
}
