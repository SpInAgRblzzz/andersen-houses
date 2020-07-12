import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
const axios = require("axios");

function CardsPage({ user }) {
	useEffect(() => {
		axios
			.get(`https://anapioficeandfire.com/api/houses`)
			.then(({ data }) => {
				console.log(data);
			});
	}, []);

	return (
		<>
			{user ? null : <Redirect to="/login" />}
			<li>{user.name}</li>
		</>
	);
}

export default connect((state) => ({ user: state.user }))(CardsPage);
