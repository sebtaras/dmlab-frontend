import React from "react";
import FacebookLogin from "react-facebook-login";
import { responseFacebook } from "../util/facebookResponse";

export default function LoginForm() {
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
