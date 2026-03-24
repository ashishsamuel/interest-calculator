import { TextField } from "@mui/material";
import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {

  const [principalAmount,setPrincipaAmount] = useState("");
  const [rateOfInterest,setRateOfInterest] = useState("");
  const [timePeriod,setTimePeriod] = useState("");
  const [interest, setInterest] = useState(0);

  const calculateInterest = (e)=>{
    e.preventDefault();
    setInterest((principalAmount*rateOfInterest*timePeriod)/100);
    setPrincipaAmount("");
    setRateOfInterest("");
    setTimePeriod("");
  }
  // console.log("interst value calculated",interest);

  const handleReset = (e)=>{
    e.preventDefault();
    setPrincipaAmount("");
    setRateOfInterest("");
    setTimePeriod("");
    setInterest(0);
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
                value={principalAmount}
                onChange={(e)=>setPrincipaAmount(e.target.value)}
              />

              <TextField
                id="rateinterest"
                label="Rate of interest ( p.a ) %"
                variant="outlined"
                name="rateinterest"
                className="w-100 border rounded my-2"
                value={rateOfInterest}
                onChange={(e)=>setRateOfInterest(e.target.value)}
              />

              <TextField
                id="time"
                label="Time period ( Yr )"
                variant="outlined"
                name="time"
                className="w-100 border rounded my-2"
                value={timePeriod}
                onChange={(e)=>setTimePeriod(e.target.value)}
              />
            </div>

            {/* action buttons */}
            <div className="d-flex justify-content-between">
              <Button
                className="text-light w-50 bg-dark px-2 m-1 py-3 fw-bold"
                variant="contained" type="submit"
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
