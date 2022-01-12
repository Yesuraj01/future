import React, { useEffect, useState } from "react";
import axios from 'axios';

function ApiService() {
    const [advice, setAdvice] = useState([]);
    console.log(advice);
const url = "/svnprojects/WebService/ajsfile.php";
//  const url = "https://api.adviceslip.com/advice";
useEffect(() => {
    axios.get(url, //proxy uri      
    {
       headers: {
          'Content-Type': 'application/json',
          timeout: 5000,
          'accept': '*/*'
       } 
    })
       .then(response => {
        console.log(response)
       // setAdvice(response&&response.data.response  )    
     }).catch(error => {
        console.log(error);
    })
  }, []);
     
    return (
      <p>
{
  advice.map(res=>{
    return(
    <>

      {res.StudentName}
      <br/>
    </>
);
  })
}
      </p>
    
    );

}
export default ApiService;

