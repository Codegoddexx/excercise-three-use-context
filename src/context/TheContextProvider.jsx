/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import formReducer from "../reducer/formReducer";
export const TheContext = createContext()

const TheContextProvider = ({children}) => {

    const defaultState = {
        cardName: "JAYMHARAH IWUALA",
        cardNumber: '0',
        expiryMonth: '0',
        expiryYear: '0',
        cvc: '0'
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