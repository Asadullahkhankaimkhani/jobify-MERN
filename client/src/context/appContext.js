import { useContext, useReducer, createContext } from "react";
import reducer from "./reducers";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const useAppContext = () => useContext(AppContext);

export { useAppContext, initialState, AppProvider };
