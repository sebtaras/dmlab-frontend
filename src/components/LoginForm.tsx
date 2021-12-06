import FacebookLogin from "react-facebook-login";
import axios from "axios";
import { useNavigate } from "react-router";

interface Props {
  setToken: any;
}

export default function LoginForm({ setToken }: Props) {
  const navigate = useNavigate();

  const responseFacebook = async (fbResponse: any) => {
    console.log(fbResponse);
    if (fbResponse.id !== undefined) {
      let result = await axios.post("http://localhost:5000/register", {
        id: fbResponse.id,
        name: fbResponse.name,
        email: fbResponse.email,
      });
      console.log(result);
      localStorage.setItem("accessToken", fbResponse.accessToken);
      setToken(fbResponse.accessToken);
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

// pitaj za jiru
