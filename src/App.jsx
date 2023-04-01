import { useAuth0 } from "@auth0/auth0-react";
import LoggedInUserPage from "./components/LoggedInUserPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Auth0ProviderWithNavigate } from "../src/components/Auth0ProviderNavigate";
import { AuthenticationGuard } from "./components/AuthenticationGuard";


function App() {
	const domain = "dev-76jmhxudzvoqistv.us.auth0.com";
	const clientId = "fizPiaSUt9jkcdXZv7IS7pweC0MluPll";
	const { user, isAuthenticated, isLoading } = useAuth0();
	return (
		<div className="min-h-screen">
			<div>
				<BrowserRouter>
					<Auth0ProviderWithNavigate
						domain={domain}
						clientId={clientId}
						authorizationParams={{
							redirect_uri: `${window.location.origin}`,
						}}
					>
						<Routes>
							<Route path="/" element={<LandingPage />} />
							<Route
								path="/profile"
								element={<AuthenticationGuard component={LoggedInUserPage} />}
							/>

							{/* <Route path="/profile" element={<LoggedInUserPage />} /> */}
						</Routes>
					</Auth0ProviderWithNavigate>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
