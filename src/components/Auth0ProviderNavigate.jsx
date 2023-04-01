import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";


//
export const Auth0ProviderWithNavigate = ({ children }) => {
	const navigate = useNavigate();

	const domain = "dev-76jmhxudzvoqistv.us.auth0.com";
	const clientId = "fizPiaSUt9jkcdXZv7IS7pweC0MluPll";
	const redirectUri = `${window.location.origin}/profile`;

	const onRedirectCallback = (appState) => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	if (!(domain && clientId && redirectUri)) {
		return null;
	}

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirectUri,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};
