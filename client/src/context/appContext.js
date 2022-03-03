import { useContext, useReducer, createContext } from "react";
import { DISPLAY_ALERT } from "./actions";
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

  const displaYAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  return (
    <AppContext.Provider value={{ ...state, displaYAlert }}>
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const useAppContext = () => useContext(AppContext);

export { useAppContext, initialState, AppProvider };
