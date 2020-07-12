import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { validateUser } from "../../actionCreators/actionCreators";

function LogInForm({ user, validateUser }) {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validateUser(inputValue.trim());
	};

	return (
		<>
			{user ? <Redirect to="/" /> : null}
			<form onSubmit={handleSubmit}>
				<input
					placeholder="LogIn"
					onChange={handleInputChange}
					value={inputValue}
				/>
				<input type="submit" value="LogIn"></input>
			</form>
		</>
	);
}

export default connect((state) => ({ user: state.user }), { validateUser })(
	LogInForm
);
