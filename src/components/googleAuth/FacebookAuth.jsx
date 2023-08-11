// import React, { useState } from "react";
// import FacebookLogin from "react-facebook-login";

// const FacebookAuth = () => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [userData, setUserData] = useState({});

//   const responseFacebook = (response) => {
//     if (response.status !== "unknown") {
//       setIsLogged(true);
//       setUserData(response);
//     } else {
//       setIsLogged(false);
//       setUserData({});
//     }
//   };

//   return (
//     <div>
//       {isLogged ? (
//         <div>
//           <h2>Welcome, {userData.name}!</h2>
//           <p>Email: {userData.email}</p>
//           <p>ID: {userData.id}</p>
//         </div>
//       ) : (
//         <FacebookLogin
//           appId="1443309293135308" // Your Facebook App ID
//           autoLoad={false}
//           fields="name,email,picture"
//           callback={responseFacebook}
//         />
//       )}
//     </div>
//   );
// };

// export default FacebookAuth;
// import React from "react";
// import FacebookAuth from "react-facebook-auth";

// const MyFacebookButton = ({ onClick }) => (
//   <button onClick={onClick}>Login with facebook</button>
// );

// const authenticate = (response) => {
//   console.log(response);
//   // Api call to server so we can validate the token
// };

// export const AuthApp = () => (
//   <div>
//     <h1>Facebook Auth</h1>
//     <FacebookAuth
//       appId="1443309293135308"
//       callback={authenticate}
//       component={MyFacebookButton}
//     />
//   </div>
// );

import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

function FacebookAuth() {
  return (
    <div className="App">
      <LoginSocialFacebook
        appId="1443309293135308"
        onResolve={(response) => {
          console.log(response);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
}

export default FacebookAuth;
