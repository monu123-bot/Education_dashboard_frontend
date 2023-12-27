import React from 'react'

const ClassCard = (props) => {

    const handleSelectClass = (data)=>{
        console.log('clicked')
   props.setmainvalue("insideclass")
   props.setclassid(data.classId)
    }

  return (
 
   <>
   
   <div className="card" style={{width:'10rem',height:'15rem'}}>
  <div className="card-body">
    <h5 className="card-title">Class : {props.classInfo.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">Students : {props.classInfo.students}</h6>
    <h6 className="card-subtitle mb-2 text-muted">Class Teacher : {props.classInfo.classTeacher}</h6>
    
    <button className='btn btn-sm' onClick={()=>{handleSelectClass(props.classInfo)}} >Enter</button>
    
  </div>
</div>
   
   </>

 
  )
}



export default ClassCard
