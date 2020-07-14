import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const axios = require("axios");

function CardsPage({ user }) {
	const { topic } = useParams();
	const [cardList, setCardList] = useState([]);

	useEffect(() => {
		if (user && topic) {
			axios
				.get(`https://anapioficeandfire.com/api/${topic}`)
				.then(({ data }) => {
					console.log(data);
					setCardList(data);
				});
		}
	}, [user, topic]);

	return (
		<>
			{!user ? (
				<Redirect to="/login" />
			) : topic ? (
				<ul>
					{cardList.map((item) => {
						const urlArray = item.url.split("/");
						const key = urlArray[urlArray.length - 1];
						return (
							<li key={key}>
								<Link to={`${topic}/${key}`}>
									{item.name
										? item.name
										: item.name === ""
										? item.aliases[0]
										: "Noname"}
								</Link>
							</li>
						);
					})}
				</ul>
			) : (
				<Redirect to="/books" />
			)}
		</>
	);
}

export default connect((state) => ({ user: state.user }))(CardsPage);
