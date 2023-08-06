// import { useContext } from "react";

const formReducer = (state, action) => {
    if (action.type === "CHANGE_NAME") {
      return { ...state, cardName: action.payload };
    } else if (action.type === "CHANGE_NUMBER") {
      return { ...state, cardNumber: action.payload };
    } else if (action.type === "CHANGE_MONTH") {
      return { ...state, expiryMonth: action.payload };
    } else if (action.type === "CHANGE_YEAR") {
      return { ...state, expiryYear: action.payload };
    } else if (action.type === "CHANGE_CVC") {
      return { ...state, cvc: action.payload };
    } else {
      return state;
    }
  };
  
  export default formReducer;