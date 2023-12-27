import React from 'react'
import ClassCard from '../cards/ClassCard'
const Class = (props) => {
    let classes = [
        {"name":1,"students":20,"classTeacher":"Monu Dixit","classId":1},
        {"name":2,"students":20,"classTeacher":"Monu Dixit","classId":2},
        {"name":3,"students":20,"classTeacher":"Monu Dixit","classId":3},
        {"name":4,"students":20,"classTeacher":"Monu Dixit","classId":4},
        {"name":5,"students":20,"classTeacher":"Monu Dixit","classId":5},
        {"name":6,"students":20,"classTeacher":"Monu Dixit","classId":6},
        {"name":7,"students":20,"classTeacher":"Monu Dixit","classId":7},
        {"name":8,"students":20,"classTeacher":"Monu Dixit","classId":8},
        {"name":9,"students":20,"classTeacher":"Monu Dixit","classId":9},
        {"name":10,"students":20,"classTeacher":"Monu Dixit","classId":10},
        {"name":11,"students":20,"classTeacher":"Monu Dixit","classId":11},
        {"name":12,"students":20,"classTeacher":"Monu Dixit","classId":12},
        {"name":13,"students":20,"classTeacher":"Monu Dixit","classId":13},
        {"name":14,"students":20,"classTeacher":"Monu Dixit","classId":14},
        {"name":15,"students":20,"classTeacher":"Monu Dixit","classId":15},
        {"name":16,"students":20,"classTeacher":"Monu Dixit","classId":16},
        {"name":17,"students":20,"classTeacher":"Monu Dixit","classId":17}

    ]
   
  return (
    <div style={{height:'94%',overflow:'auto',display:'flex',flexWrap:'wrap',padding:'20px'}} >

   
    
    {
          
             
      classes.map((classItem, index) => (
        <>
        
          
          <ClassCard key={index}  classInfo = {classItem} setmainvalue = {props.setmainvalue} setclassid = {props.setclassid}  />
          
          </>
      ))
    
    }
    <div className="card" style={{width:'10rem',height:'10rem'}}>
      <div className="card-body">
       +
        
      </div>
    </div>
    
         
        </div>
  )
}

export default Class
