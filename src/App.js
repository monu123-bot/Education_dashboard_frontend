
import './App.css';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { useEffect, useState } from 'react';
import SelectRole from './components/SelectRole';
import InstituteDashboard from './components/institute/InstituteInfo'
// import { GoogleLogin } from '@react-oauth/google';
function App() {
  const [loginMsg, setLoginMsg] = useState(null);
  const [isLogin,setIslogin] = useState(false)
  const [token,setToken] = useState(null)
  const [isroleSet,setIsroleSet] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // User is logged in
      console.log("use effect is running and token is found")
      setToken(token);
      setIslogin(true);
  
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${token}`, // Proper format for Authorization header
      };
  
      const fetchData = async () => {
        try {
          const resp = await axios.get('http://localhost:4000/checkrole', { headers });
          console.log(resp)
          if (resp.data.msg !== null ) {
            setIsroleSet(true);
          }
        } catch (error) {
          setToken(null);
      setIslogin(false);
          setIsroleSet(false);
          // Handle errors - you might want to log the error for debugging
          console.error('Error fetching role:', error);
        }
      };
  
      fetchData();
    }
  }, []);
  
  const enter =async (loginData)=>{
        // const resp = await  axios.post('http://localhost:4000/login',loginData)
        
      try {
        const resp = await axios.post('http://localhost:4000/login',loginData)
        console.log(resp)
        const token1 = resp.headers.authorization
        localStorage.setItem('token', token1);
        setToken(token1)
        setIslogin(true)
        if (resp.data.msg==="role defined"){
          setIsroleSet(true)
          console.log("role defined")
        }
        if (resp.data.msg==="role not defined"){
          

          setIsroleSet(false)
          setLoginMsg("role not defined")
          console.log("role not defined")

        }
        if (resp.data.msg==="user not defined"){
          console.log("user not defined")
        }
        console.log(resp)
      } catch (error) {
        setLoginMsg(error)
        console.log(error)
      }
     
  }
  
  
  return (

  <>

    <div className="App">


   { (isLogin===true && isroleSet===true) ? <InstituteDashboard /> :( isLogin === true ? <SelectRole  token={token}  />  : <GoogleOAuthProvider clientId="573232329729-b7cl896krcqalql9nvqkfg0cl5ekpn2u.apps.googleusercontent.com">
      
    <GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwtDecode(credentialResponse.credential);
    enter(decoded)
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
      
      
      </GoogleOAuthProvider>)  }

     

    </div>

    
    </>

  );
}

export default App;
