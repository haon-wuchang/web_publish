import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Employees() {
    const [employees,setEmployees] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9000/employee/all')
            .then(res => setEmployees(res.data))
            .catch(error=>console.log(error));
    },[]);

    console.log(employees); 
    
    return (
        <div>
            <h1>DB TEST</h1>
            <table border={1}>
                    <tr>
                        <th>no</th>
                        <th>id</th>
                        <th>name</th>
                        <th>ename</th>
                        <th>gender</th>
                        <th>hire_date</th>
                        <th>salary</th>
                    </tr>
                {employees&&employees.map((item)=>
                    <tr>
                        <td>{item.no}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.ename}</td>
                        <td>{item.gender}</td>
                        <td>{item.hiredate}</td>
                        <td>{item.salary}</td>
                    </tr>
                )}
            </table>
        </div>
    );
}

