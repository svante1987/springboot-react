import React, {useEffect, useState} from 'react'
import EmployeeService from '../../services/EmployeeService'

const ListEmployee = (props) => {

  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data)
      console.log(employees)
    })
  },[])

  const employ = employees.map((obj, key) => {
    return(
      <tr key = {obj.id}>
        <td>{obj.firstName}</td>
        <td>{obj.lastName}</td>
        <td>{obj.emailId}</td>
      </tr>
    )
  })

  return (
    <div>
      <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employ}
          </tbody>

        </table>

    </div>
  )
}

export default ListEmployee