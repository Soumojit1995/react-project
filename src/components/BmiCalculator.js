import Header from './Header';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';

function BmiCalculator(){
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState('--');

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +mass > 0;
    if (!formValid) {
      return;
    }
    const bmi = (+mass / (+height/100) ** 2);
    console.log(bmi.toFixed(2))
    setBmi(bmi.toFixed(2));

    if (bmi<16){
      setCategory('Underweight (Severe thinness)');
    }
    else if(bmi<17 && bmi>=16){
       setCategory('Underweight (Moderate thinness)');
    }
    else if(bmi<18.5 && bmi>=17){
       setCategory('Underweight (Mild thinness)');
    }
    else if(bmi<25 && bmi>=18.5){
       setCategory('Normal range');
    }
    else if(bmi<30 && bmi>=25){
       setCategory('Overweight (Pre-obese)');
    }
    else if(bmi<35 && bmi>=30){
       setCategory('Obese (Class I)');
    }
    else if(bmi<40 && bmi>=35){
       setCategory('Obese (Class II)');
    }
    else{
     setCategory('Obese (Class III)');
    }

  };

  return (
    <div className="App">
        <Header pageName='BmiCalculator' project='1'/>
        <div className = "container">
          <div className="row">
            <form onSubmit={calculate} class="calculator">
              <div className="row">

                <div className="col-4">
                  <label htmlFor="hight" className="form-label">Height(Cm)</label>
                  <input type="number" className="form-control" id="hight" placeholder="Enter Hight" value={height} onChange={(e) => setHeight(e.target.value)}/>
                </div>
                <div className = "col-4">
                  <label htmlFor="wight" className="form-label">Wight (Kg)</label>
                  <input type="number" className="form-control" id="wight" placeholder="Enter Wight"  value={mass} onChange={(e) => setMass(e.target.value)}/>
                </div>
                <div className = "col-4">
                  <p>BMI: {bmi} kg/m2</p>
                  <p>Category: {category} </p>
                </div>

                <div className = "col-12" >
                  <Button variant = "warning" type="submit"> Calculate</Button>
                </div>
              </div>
              </form>
            
          </div>
        </div>
      
      


    </div>
  );

}



export default BmiCalculator;