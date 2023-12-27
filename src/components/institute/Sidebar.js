import React from 'react'

const sidebar = () => {
  return (
    <div style={{overflowY:'auto',height:'90%',fontSize:'20px',padding:'30px'}}>

        <div><h5>
        Academics
      </h5>
      
        <a href='#'>Classes</a>
     <br/>
        <a href='#'>Faculty</a>
       
            <br/>
          
            <a href='#'>Roles</a>

       </div>
       <br/>
      <div>
      <h5>
        Finance
      </h5>
      <a href='#'>Fee Collected</a>
        <br/>
        <a href='#'>Expenses</a>
       <br/>
            
            
            <a href='#'>Profit</a>

        
      </div>
<br/>
     <div>
     <h5>
        Inventory
      </h5>
      
            <a href='#'>Classes</a>
            
       
     </div>

      
    </div>
  )
}

export default sidebar
