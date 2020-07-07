import React, { useState } from "react";

function LogInForm() {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder="LogIn"
				onChange={handleInputChange}
				value={inputValue}
			/>
			<input type="submit" value="LogIn"></input>
		</form>
	);
}

export default LogInForm;
