import React, { useReducer, createContext } from 'react';
import contextReducer from './contexReducer';
interface IContextProps {
  color: string;
  changeLight: () => void;
  changeDark: () => void;
  changePink: () => void;
  changeBlue: () => void;
}
export const ThemeContext = createContext({} as IContextProps);
const { Provider } = ThemeContext;
function ContextState(props: any): JSX.Element {
  const initialState = '#fff' as string;
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const changeLight = () => {
    dispatch({ type: 'light' });
  };
  const changeDark = () => {
    dispatch({ type: 'dark' });
  };
  const changePink = () => {
    dispatch({ type: 'pink' });
  };
  const changeBlue = () => {
    dispatch({ type: 'blue' });
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
