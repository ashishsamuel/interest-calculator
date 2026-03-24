import { TextField } from "@mui/material";
import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {

  const [principalAmount,setPrincipaAmount] = useState(0);
  const [rateOfInterest,setRateOfInterest] = useState(0);
  const [timePeriod,setTimePeriod] = useState(0);
  const [interest, setInterest] = useState(0);
  const [principalAmountValid, setPrincipalAmountValid] = useState(true);
  const [rateOfInteresttValid, setRateOfInterestValid] = useState(true);
  const [timePeriodValid, setTimePeriodValid] = useState(true);

  const calculateInterest = (e)=>{
    e.preventDefault();
    if(!principalAmount || !rateOfInterest || !timePeriod)
      alert("Please fill the form completely")
    else {
      setInterest((principalAmount*rateOfInterest*timePeriod)/100);
      setPrincipaAmount(0);
      setRateOfInterest(0);
      setTimePeriod(0);
    } 
  }
  // console.log("interst value calculated",interest);

  const handleReset = (e)=>{
    e.preventDefault();
    setPrincipaAmount(0);
    setRateOfInterest(0);
    setTimePeriod(0);
    setInterest(0);
    setPrincipalAmountValid(true);
    setRateOfInterestValid(true);
    setTimePeriodValid(true);
  }

  const validateInput = (e)=>{
    const {name,value} = e.target;

    if(!!value.match(/^[0-9]+$/)){
      if(name === "pamount") {
        setPrincipaAmount(value);
        setPrincipalAmountValid(true);
      } else if(name === "rateinterest") {
        setRateOfInterest(value);
        setRateOfInterestValid(true);
      } else {
        setTimePeriod(value);
        setTimePeriodValid(true);
      }
    }
    else {
      if(name === "pamount") {
        setPrincipaAmount(value);
        setPrincipalAmountValid(false);
      }  else if(name === "rateinterest") {
        setRateOfInterest(value);
        setRateOfInterestValid(false);
      } else {
        setTimePeriod(value);
        setTimePeriodValid(false);
      }
    }
    
  }
  

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
        <div className="card p-4 m-4" style={{ width: "480px" }}>
          <h5>Simple Calculator</h5>
          <p>Calculate your simple interest easily</p>
          <div
            className="d-flex flex-column justify-content-center align-items-center border w-100 text-center rounded"
            style={{ height: "200px", backgroundColor: "yellow" }}
          >
            <p>{interest}</p>
            <p>Total simple interest</p>
          </div>

          {/* user input fields */}
          <form onSubmit={calculateInterest}>
            <div className="my-4">
              <TextField
                id="pamount"
                label="Principal Amount"
                variant="outlined"
                name="pamount"
                className="w-100 border rounded my-2"
                value={principalAmount || ""}
                onChange={validateInput}
              />
              {
                !principalAmountValid && 
                <small className="text-danger mb-2 fw-bold">* Principle Amount is Invalid</small> 
              }

              <TextField
                id="rateinterest"
                label="Rate of interest ( p.a ) %"
                variant="outlined"
                name="rateinterest"
                className="w-100 border rounded my-2"
                value={rateOfInterest || ""}
                onChange={validateInput}
              />

              {
                !rateOfInteresttValid && 
                <small className="text-danger mb-2 fw-bold">* Rate of Interest is Invalid</small> 
              }

              <TextField
                id="time"
                label="Time period ( Yr )"
                variant="outlined"
                name="time"
                className="w-100 border rounded my-2"
                value={timePeriod || ""}
                onChange={validateInput}
              />

              {
                !timePeriodValid && 
                <small className="text-danger mb-2 fw-bold">* Time Period is Invalid</small> 
              }
            </div>

            {/* action buttons */}
            <div className="d-flex justify-content-between">
              <Button
                className="text-light w-50 bg-dark px-2 m-1 py-3 fw-bold"
                variant="contained" type="submit" disabled={!principalAmount || !principalAmountValid || !rateOfInterest || !rateOfInteresttValid || !timePeriod || !timePeriodValid}
              >
                Calculate
              </Button>
              <Button
                className="text-info py-3 w-50 px-2 m-1 fw-bold"
                variant="contained" onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
