import { useState, useReducer, useContext } from 'react'
import './App.css'
import formReducer from './reducer/formReducer'
import { TheContext } from './context/TheContextProvider'

 
  
  function App() {
    const {state, dispatch, cardName, cardNumber, } = useContext(TheContext)

  
    function changecardName(e) {
      dispatch({ type: "CHANGE_NAME", payload: e.target.value });
    }
  
    function changeCardNumber(e) {
      dispatch({ type: "CHANGE_NUMBER", payload: e.target.value });
    }
  
    function changeDate(e) {
      dispatch({ type: "CHANGE_DATE", payload: e.target.value });
    }
  
    function changeCvc(e) {
      dispatch({ type: "CHANGE_CVC", payload: e.target.value });
    }


  return (
    <>
     <div className="app">
       <div className="formDiv">
       
        <div className='output'>
          <h1> {state.cardName} </h1>
          <p> {state.cardNumber} </p>
          <p> {state.expiryDate} </p>
          <p> {state.cvc} </p>
        </div>

        <form>
          <label>Cardholder Name</label>
          <input type="text" value={state.cardName} onInput={changecardName} />
          <label>Cardholder Number</label>
          <input type="number" value={state.cardNumber} onInput={changeCardNumber}/>
          <label>Expiry Date</label>
          <input type="date" value={state.expiryDate} onInput={changeDate} />
          <label>CVC</label>
          <input type="number" value={state.cvc} onInput={changeCvc} maxLength={3}/>
          <button className='button'>Confirm</button>
        </form>
       </div>
     </div>
    </>
  )
}

export default App
