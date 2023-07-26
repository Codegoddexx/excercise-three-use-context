import { createContext, useReducer } from "react";
import formReducer from "../reducer/formReducer";
export const TheContext = createContext()

const TheContextProvider = ({children}) => {
    const defaultState = {
        cardName: "",
        cardNumber: "",
        expiryDate: "",
        cvc: ""
      }
    const [state, dispatch] = useReducer(formReducer, defaultState);

    const objectsToBePassed = {
      state,
      dispatch
        
}

    return(
        <TheContext.Provider
        value={objectsToBePassed}
        >
        {children}
        </TheContext.Provider>
    )

}

export default TheContextProvider