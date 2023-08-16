import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Auth = () => {
  const handleSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.idToken);

    console.log(decoded);
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId="4613902995-ca2jsu912pnl14afga6te89ulp246c8u.apps.googleusercontent.com">
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </GoogleOAuthProvider>
  );
};

export default Auth;
