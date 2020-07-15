import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogInForm from "./components/LogInForm/LogInForm";
import Navigation from "./components/Navigation/Navigation";
import CardsPage from "./components/CardsPage/CardsPage";
import TopicItemPage from "./components/TopicItemPage/TopicItemPage";

function App() {
	return (
		<Router>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
			/>

			<Navigation />

			<Switch>
				<Route path="/login">
					<LogInForm />
				</Route>
				<Route path="/:topic/:id">
					<TopicItemPage />
				</Route>
				<Route path="/:topic">
					<CardsPage />
				</Route>
				<Route path="/">
					<CardsPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
