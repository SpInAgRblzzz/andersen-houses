import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
const axios = require("axios");

function CardsPage() {
	useEffect(() => {
		axios
			.get(`https://anapioficeandfire.com/api/houses`)
			.then(({ data }) => {
				console.log(data);
			});
	}, []);

	return (
		<>
			{/* <Redirect to="/login" /> */}
			<li></li>
		</>
	);
}

export default CardsPage;
