import React from 'react'
import {provdata} from './pData';
export default function Details() {
  return (
    <>  
        {provdata.employees.map((employee,key)=>{
            return(<div key={key}>
                {employee.id +
                  " , " +
                  employee.name +
                  " ," +
                  employee.designation }
              </div>)
        }
        )}
      
    </>
  )
}
