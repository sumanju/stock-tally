import 	React from "react";
import 	{ hot } from "react-hot-loader";
import 	"./App.css";
import	{	BrowserRouter as Router, 
			Routes, 
			Route 
		} from "react-router-dom";
import LoginSignupComponent from "./login-signup-section/LoginSignupComponent";

function App() {
  	return (
    	<div className="container">
			<Router>
				<Routes>
					<Route path="/login" element={<LoginSignupComponent isLogin={true}/>} />
					<Route path="/register" element={<LoginSignupComponent isSignup={true}/>} />
				</Routes>
			</Router>
    	</div>
  	);
}

export default hot(module)(App);
