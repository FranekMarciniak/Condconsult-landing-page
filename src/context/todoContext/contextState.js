import React, { useReducer, createContext } from "react";
import contextReducer from "./contexReducer";
export const ThemeContext = createContext();
const { Provider } = ThemeContext;
function ContextState(props) {
	const initialState = "#fff";
	const [state, dispatch] = useReducer(contextReducer, initialState);
	const changeLight = () => {
		dispatch({ type: "light" });
	};
	const changeDark = () => {
		dispatch({ type: "dark" });
	};
	const changePink = () => {
		dispatch({ type: "pink" });
	};
	const changeBlue = () => {
		dispatch({ type: "blue" });
	};
	return (
		<Provider
			value={{
				color: state,
				changeLight,
				changeDark,
				changePink,
				changeBlue,
			}}
		>
			{props.children}
		</Provider>
	);
}

export default ContextState;
