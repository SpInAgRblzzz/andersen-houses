import actionTypes from "../actionCreators/actionTypes";
const { VALIDATE_USER } = actionTypes;

function UserReducer(state = null, action) {
	switch (action.type) {
		case VALIDATE_USER:
			if (action.name === "admin") {
				return { name: action.name, isAdmin: true };
			}

			if (action.name.length > 0) {
				return { name: action.name, isAdmin: false };
			}

			return null;

		default:
			return state;
	}
}

export default UserReducer;
