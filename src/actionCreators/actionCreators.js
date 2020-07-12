import actionTypes from "./actionTypes";
const { VALIDATE_USER } = actionTypes;

export function validateUser(name) {
	return {
		type: VALIDATE_USER,
		name,
	};
}
