import React from 'react';



const Login = (props) => {
    function display(props){
          props.preventdefault();
          if(props.username==="123456"){
             document.write("hello")
          }
    }
  
  return (
     
    <input className="btn btn-success w-100" type="submit" value="LOGIN" onSubmit={display(props)}/>
    
  )
}

export default Login