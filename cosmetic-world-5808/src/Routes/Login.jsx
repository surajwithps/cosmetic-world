import React from 'react'
import {useState} from 'react'
function Login() {
const [loginDetail, setLoginDetail]= useState({
  email:"",
  password:""
})
const [emailA, setEmailA] = useState('')
const [passwordA, setPasswordA] = useState('')
const commonborder = {border:'1px solid black', display:'flex', flexDirection:'column', padding:'30px'}
const inputStyle = {padding:'8px'}
const buttonStyle = {padding:'10px', color:'white', backgroundColor:'black', cursor:'pointer'}

const handleSubmit = ()=>{
    if(emailA!=="" && passwordA!==""){
      setLoginDetail({...loginDetail, email:emailA, password:passwordA})
    }
  }
      

console.log(loginDetail)

  return (
    <div style={{width:'60%', margin:'auto'}}>

    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', justifyContent:'center', gap:'10px', margin:'auto'}}>
      <div>
        <div style={commonborder}>
        <h3>Existing Customer</h3>
          <p>*Email address </p>
          <input type="email" placeholder='email' style={inputStyle} value={emailA} onChange={(e)=>setEmailA(e.target.value)} required/>
          <p>*Password</p>
          <input type="password" placeholder='password' style={inputStyle} value={passwordA} onChange={(e)=>setPasswordA(e.target.value)} required/>
          <p>FORGOTTEN YOUR PASSWORD?</p>
          <button style={buttonStyle} onClick={handleSubmit}>Login To Your Account</button>
          <p>Or, Continue with</p>

          <div>FaceBook Image</div>
          <div>google image</div>
        </div>
         
      </div>
    <div style={{border:'1px solid black', alignSelf:'flex-start', padding:'10px 20px 20px 10px'}}>
         <h4>New Customers</h4>
         <button style={{width:'90%', margin:'auto', display:'block', padding:'10px', color:'white', backgroundColor:'black', cursor:'pointer'}}>REGISTER</button>
      </div>
    </div>
  </div>
  )
}

export default Login