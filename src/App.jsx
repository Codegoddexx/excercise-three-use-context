import { useContext } from "react";
import "./App.css";
import { TheContext } from "./context/TheContextProvider";
import { useFormik } from "formik";

import logo from "./assets/images/card-logo.svg";

function App() {
  const { state, dispatch } = useContext(TheContext);

  const initialValues = {
    cardName: "JAYMHARAH IWUALA",
    cardNumber: "0",
    expiryMonth: "0",
    expiryYear: "0",
    cvc: "0",
  };

  const onSubmit = (values) => {
    console.log("form data", values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.cardName) {
      errors.cardName = "Can't be blank";
    }

    if (!values.cardNumber) {
      errors.cardNumber = "Can't be blank";
    } else if (!/^\d*$/i.test(values.cardNumber)) {
      errors.cardNumber = "Wrong format, numbers only";
    }

    if (!values.expiryMonth) {
      errors.expiryMonth = "Can't be blank";
    }
    if (!values.expiryYear) {
      errors.expiryYear = "Can't be blank";
    }
    if (!values.cvc) {
      errors.cvc = "Can't be blank";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log("visited fields", formik.touched);

  function changecardName(e) {
    dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  }

  function changeCardNumber(e) {
    dispatch({ type: "CHANGE_NUMBER", payload: e.target.value });
  }

  function changemonth(e) {
    dispatch({ type: "CHANGE_MONTH", payload: e.target.value });
  }

  function changeyear(e) {
    dispatch({ type: "CHANGE_YEAR", payload: e.target.value });
  }

  function changeCvc(e) {
    dispatch({ type: "CHANGE_CVC", payload: e.target.value });
  }

  return (
    <>
      <div className="app">
        <div className="formDiv">
          <div className="output">
            <div className="firstCard">
              <p> {state.cvc.slice(0, 3).padStart(3, "0")} </p>
            </div>

            <div className="secondCard">
              <img src={logo} />
              <div className="details">
                <div className="numDetails">
                  <p>
                  
                    {state.cardNumber
                      .padStart(16, "0")
                      .match(/.{1,4}/g)
                      .join(" ")
                      .slice(0, 19).padStart(16, "0")}
                  </p>
                </div>
                <div className="textDetails">
                  <p className="name"> {`${state.cardName}`} </p>
                  <p>
                    {state.expiryMonth.slice(0, 2).padStart(2, "0")}/
                    {state.expiryYear.slice(0, 2).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="formContent">
              <div className="topForm">
                <div className="theName">
                  <label>Cardholder Name</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    placeholder="eg. Jaymharah Iwuala "
                    maxLength={20}
                    onInput={changecardName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cardName  > 0 ? formik.values.cardName : ""}
                    style={formik.touched.cardName && formik.errors.cardName ? {borderColor: 'red'} : null}
                  />
                  {formik.errors.cardName ? (
                    <p className="error">{formik.touched.cardName && formik.errors.cardName}</p>
                  ) : null}
                </div>
                <label>Cardholder Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="eg 1234 5678 9123 0000"
                  onInput={changeCardNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cardNumber > 0 ? String(formik.values.cardNumber).slice(0, 16) : ''}
                  style={formik.errors.cardName ? {borderColor: 'red'} : null}
                />
                {formik.errors.cardNumber ? (
                  <p className="error">{formik.touched.cardNumber && formik.errors.cardNumber}</p>
                ) : null}
              </div>
              <div className="flexDiv">
                <div className="date">
                  <label>EXP.DATE(MM/YY)</label>
                  <div className="dateInput">
                    <div>
                      <input
                        type="number"
                        id="expiryMonth"
                        name="expiryMonth"
                        placeholder="MM"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expiryMonth > 0 ? String(formik.values.expiryMonth).slice(0, 2) : ""}
                        onInput={changemonth}
                        style={formik.errors.cardName ? {borderColor: 'red'} : null}
                      />
                      {formik.errors.expiryMonth ? (
                        <p className="error">{formik.touched.expiryMonth && formik.errors.expiryMonth}</p>
                      ) : null}
                    </div>
                    <div>
                      <input
                        type="number"
                        id="expiryYear"
                        name="expiryYear"
                        placeholder="YY"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.expiryYear > 0 ? String(formik.values.expiryYear).slice(0, 2) : ''}
                        onInput={changeyear}
                        style={formik.errors.cardName ? {borderColor: 'red'} : null}
                      />
                      {formik.errors.expiryYear ? (
                        <p className="error">{formik.touched.expiryYear && formik.errors.expiryYear}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="cvcDiv">
                  <label>CVC</label>
                  <input
                    type="number"
                    id="cvc"
                    name="cvc"
                    placeholder="eg 353"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cvc > 0 ? String(formik.values.cvc).slice(0, 3) : ""}
                    maxLength={"4"}
                    onInput={changeCvc}
                    style={formik.errors.cardName ? {borderColor: 'red'} : null}
                  />
                  {formik.errors.cvc ? (
                    <p className="error">{formik.touched.cvc && formik.errors.cvc}</p>
                  ) : null}
                </div>
              </div>
              <button className="button" type="submit">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
