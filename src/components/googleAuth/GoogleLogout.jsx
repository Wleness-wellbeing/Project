import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "1051344250432-dqb023v44kpthq3mn2mje13irctkev68.apps.googleusercontent.com";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSuccess = (response) => {
    setIsSignedIn(true);
    console.log("Logged in user:", response.profileObj);
  };

  const handleFailure = (error) => {
    console.error("Google login error:", error);
  };

  return (
    <div>
      {isSignedIn ? (
        <p>You are logged in!</p>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Log in with Google"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </div>
  );
};

export default GoogleAuth;
