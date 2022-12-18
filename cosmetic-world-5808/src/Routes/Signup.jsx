import React from 'react'
import { useState } from 'react'
// import {Box, Input, Text, Flex} from '@chakra-ui/react'
function Signup() {
   const [signupDetails, setSignupDetails] = useState({
    username:"",
    email:"",
    password:"",
    mobile:"",
    referral:""
  })
  const {username, email, password, mobile, referral} = signupDetails  
  
  const inputStyle = {}
   const handleChange = (e)=>{
      e.preventDefault()
      setSignupDetails({...signupDetails, [e.target.name]:e.target.value})
   }
  console.log(signupDetails)
  return (
   <div style={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'auto'}}>
    <h4>About You</h4>
    <p>Sign up With</p>

    <div>facebook login image</div>
    <div>Google login image</div>   

    <hr />
     <p>Or Create an email account</p>
     
    <p>*Full Name</p> 
    <input type="text" placeholder='' name="username" value={username} onChange={handleChange} style={inputStyle}/>

    <p>*Email Address</p> 
    <input type="email" placeholder='' name="email" value={email} onChange={handleChange} style={inputStyle}/>
     
  <div style={{}}>
    <p>*Password</p> 
    <input type="password" placeholder='' name="password" value={password} onChange={handleChange} style={{outline:'none'}} />
    <p>We will use this number to send occasional promotional messages.</p>
  </div>


    <p>*Cell No.</p> 
    <input type="number" placeholder='' name="mobile" value={mobile} onChange={handleChange} style={inputStyle}/>

   <div className='referalCode_p_div'>
    <p>*Referral Code</p> 
    <input type="text" placeholder='' name="referral" value={referral} onChange={handleChange} style={inputStyle}/>
    <p>* Your referrals discount is automatically applied at cart</p>
   </div>
   <p>Loyalty Reward Program</p>

   <label htmlFor="">
   <input type="checkbox" />
      Include me in the Dermistore Reward Program Read our terms of use.
   </label>

   <button>Continue</button>

   <p>By proceeding, you are confirming that you agree to our Terms and Conditions and Privacy Policy</p>
   </div>
  )
}

export default Signup