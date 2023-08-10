import React from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "1051344250432-dqb023v44kpthq3mn2mje13irctkev68.apps.googleusercontent.com";

const GoogleLoginButton = ({ onGoogleLogin }) => {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onGoogleLogin}
      onFailure={onGoogleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
