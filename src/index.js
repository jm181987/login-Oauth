import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="grupoalpha.us.auth0.com"
      clientId="sZWtvBpg2S3s8TO1O77SVWgpavF670ao"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
