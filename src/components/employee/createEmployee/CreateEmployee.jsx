import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../../../services/EmployeeService'
import './create-employee.css'

const CreateEmployee = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({firstName:"", lastName:"", emailId: ""})

  const saveEmployee = () => {
    EmployeeService.createEmployee(formData).then(res =>{
    navigate('/employee')
    }
  )}

  return (
    <div className='formContainer'>
        <form>
          <label htmlFor="fname">First name:</label>
          <input type="text" id='fname' onChange={e=>setFormData({...formData, firstName: e.target.value})} placeholder='First name'/>
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" onChange={e=>setFormData({...formData, lastName: e.target.value})} placeholder='Last name'/>
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="e-mail" onChange={e=>setFormData({...formData, emailId: e.target.value})} placeholder='E-mail'/>
          <button type="button" className='formSubButton' onClick={()=>saveEmployee()}>Submit</button>
        </form>
    </div>
  )
}

export default CreateEmployee