import 	React from "react";
import 	{ hot } from "react-hot-loader";
import 	"./App.css";
import	{	BrowserRouter as Router, 
			Routes, 
			Route,
			Navigate
		} from "react-router-dom";
import LoginSignupComponent from "./login-signup-section/LoginSignupComponent";
import LandingComponent from "./landing-page-sction/LandingPageComponent";

function App() {
	if (window.innerWidth > 1100) {
		return (
			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Navigate replace="true" to="/login"/>} />
						<Route path="/login" element={<LoginSignupComponent isLogin={true}/>} />
						<Route path="/register" element={<LoginSignupComponent isSignup={true}/>} />
						<Route path="/dashboard" element={<LandingComponent page={'dashboard'}/>} />
						<Route path="/PL" element={<LandingComponent page={'PL'} />} />
					</Routes>
				</Router>
			</div>
		  );
	} else {
		return (
			<h1>incompatible device size</h1>
		)
	}
}

export default hot(module)(App);
