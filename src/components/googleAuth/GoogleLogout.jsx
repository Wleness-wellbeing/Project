import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

<GoogleOAuthProvider clientId="1051344250432-dqb023v44kpthq3mn2mje13irctkev68.apps.googleusercontent.com">
  <GoogleLogin
    onSuccess={(credentialResponse) => {
      var decoded = jwt_decode(credentialResponse.credential);

      console.log(decoded);
    }}
    onError={() => {
      console.log("Login Failed");
    }}
  />
  ;
</GoogleOAuthProvider>;
