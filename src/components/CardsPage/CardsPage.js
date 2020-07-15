import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BooksCard from "./Cards/BooksCard";
import CharactersCard from "./Cards/CharactersCard";
import HousesCard from "./Cards/HousesCard";
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

	function getCard(topic, content) {
		const name = content.name ? content.name : content.aliases[0];

		if (topic === "books") {
			return <BooksCard name={name} />;
		}

		if (topic === "characters") {
			return <CharactersCard name={name} />;
		}

		if (topic === "houses") {
			return <HousesCard name={name} />;
		}

		return "no card for this";
	}

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
									{getCard(topic, item)}
									{/* !gotData
										? "noname"
										: item.name === ""
										? item.aliases[0]
										: item.name */}
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
