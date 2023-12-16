import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import Login from './Login';
import Griveancepage from './Griveancepage'
// import GriveanceEdit from './GrievanceEdit'
import Admin from './Admin'

const Content = () => {
  const navigate = useNavigate('');
  const [number,setNumber]=useState('');
  const [password,setPassword]=useState('');
  function numChan(e){
     setNumber(e.target.value);
  }
  function passChan(e){
     setPassword(e.target.value);
  }
  function move(e){
        e.preventDefault();
        if(number==="123456" && password==="password"){
            navigate('/Griveancepage')
        }
        // const response =  fetch("mongodb://localhost:27017/LoginPage", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ number , password }),
        //   });
        //   const data =  response.json();
        //   // If the credentials are correct, navigate to the homepage
        //   if (data.status === "success") {
        //     navigate("/GrievnacePage");
        //   }
        else if(number==="1234567" && password==="admin"){
            navigate('/Admin')
        }
         else{
                alert("Invalid A/C Number and Password")
            } 
        //   }  
         
         
        
  }
   
  return (
    
    <div className="login">
        <h1 className="text-center">GRIEVANCE PORTAL</h1>
        <form className="needs-validation" id="formLOGIN">
            <div className="form-group was-validated">
                <label className="form-label" for="email">A/c Number</label>
                <input className="form-control" type="number" id="number"   onChange={numChan} value={number} required />
                <div className="invalid-feedback">
                    Please enter your account number
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" for="password">Password</label>
                <input className="form-control" type="password" id="password"  onChange={passChan} value={password} required/>
                <div className="invalid-feedback">
                    Please enter your password
                </div>
            </div>
            <div className="form-group form-check">
                <input className="form-check-input" type="checkbox" id="check"/>
                <label className="form-check-label" for="check">Remember me</label>
            </div>
            <input className="btn btn-success w-100" type="button" value="LOGIN" onClick={move} />
            
        </form>
    </div> 
    
  )

}

export default Content;