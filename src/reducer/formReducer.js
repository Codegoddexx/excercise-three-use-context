// import { useContext } from "react";

const formReducer = (state, action) => {
    if (action.type === "CHANGE_NAME") {
      return { ...state, cardName: action.payload };
    } else if (action.type === "CHANGE_NUMBER") {
      return { ...state, cardNumber: action.payload };
    } else if (action.type === "CHANGE_DATE") {
      return { ...state, expiryDate: action.payload }; // Update the "Mail" property, not "lastName"
    } else if (action.type === "CHANGE_CVC") {
      return { ...state, cvc: action.payload }; // Update the "password" property, not "lastName"
    } else {
      return state;
    }
  };
  
  export default formReducer;