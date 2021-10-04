import {} from "../types.js";
// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case "light":
			return "#fff";
		case "dark":
			return "#030235";
		case "pink":
			return "#FFE1E1";
		case "blue":
			return "#EBECFB";
		default:
			return state;
	}
};
