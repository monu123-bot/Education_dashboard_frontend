import React, { useState } from 'react';
import '../css/selectRole.css'; // Import the CSS file
import axios from "axios";
import InstituteDashboard from './institute/InstituteInfo';
const RoleSelection = (props) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [readyToGoOnDashboard,setReadytogoondashboard] = useState(false)
  const updateUserRole =async (token,role)=>{
     console.log("token",token)
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `${props.token}`, // Include JWT token in the Authorization header
      };
      const resp = await axios.post('http://localhost:4000/setrole',{role:role},{headers})
      if (resp.status===200){

        setReadytogoondashboard(true)
        console.log("role set successfully")

      }
      else{
        console.log("role not set")
      }
    } catch (error) 
    {
      console.log("error occur ",error)
    }
    
  }
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleRoleSubmit = () => {
    if (selectedRole === '') {
      alert('Please select a role');
    } else {
      // Send selected role to update user role in the backend
      updateUserRole(props.token,selectedRole);
    }
  };

  return (

    <>
    { readyToGoOnDashboard===true ? <InstituteDashboard/> :
       (<div className="role-selection-container">
       <h2>Select Your Role</h2>
       <div className="cards-container">
         <div className={`card ${selectedRole === 'student' ? 'selected' : ''}`} onClick={() => handleRoleSelect('student')}>
           <h3>Student</h3>
           <p>Role Description for Student</p>
         </div>
         <div className={`card ${selectedRole === 'institution' ? 'selected' : ''}`} onClick={() => handleRoleSelect('institution')}>
           <h3>Institution</h3>
           <p>Role Description for Institution</p>
         </div>
         <div className={`card ${selectedRole === 'faculty' ? 'selected' : ''}`} onClick={() => handleRoleSelect('faculty')}>
           <h3>Faculty</h3>
           <p>Role Description for Institution</p>
         </div>
       </div>
       <button onClick={handleRoleSubmit}>Submit</button>
     </div>)
    }
    
    
    
    </>
   
  );
};

export default RoleSelection;
