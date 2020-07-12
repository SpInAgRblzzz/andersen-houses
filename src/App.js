import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogInForm from "./components/LogInForm/LogInForm";
import Navigation from "./components/Navigation/Navigation";
import CardsPage from "./components/CardsPage/CardsPage";

function App() {
	return (
		<Router>
			<Navigation />

			<Switch>
				<Route path="/login">
					<LogInForm />
				</Route>
				<Route path="/">
					<CardsPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
