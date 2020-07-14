import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");

function TopicItemPage() {
	const [pageContent, setPageContent] = useState({});
	const { topic, id } = useParams();

	useEffect(() => {
		axios
			.get(`https://anapioficeandfire.com/api/${topic}/${id}`)
			.then(({ data }) => {
				console.log(data);
				setPageContent(data);
			});
	}, [topic, id]);

	return <p>{pageContent.name ? pageContent.name : `noname`}</p>;
}

export default TopicItemPage;
