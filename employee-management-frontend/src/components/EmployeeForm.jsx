import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById, updateEmployee } from '../services/employeeService';
import { toast } from 'react-toastify';

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then(res => setEmployee(res.data))
        .catch(() => toast.error('Failed to fetch employee data'));
    }
  }, [id]);

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = employee.name ? '' : 'Name is required.';
    tempErrors.email = employee.email ? (/^\S+@\S+\.\S+$/.test(employee.email) ? '' : 'Email is not valid.') : 'Email is required.';
    tempErrors.department = employee.department ? '' : 'Department is required.';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;

    if (id) {
      updateEmployee(id, employee)
        .then(() => {
          toast.success('Employee updated successfully');
          navigate('/');
        })
        .catch(() => toast.error('Failed to update employee'));
    } else {
      addEmployee(employee)
        .then(() => {
          toast.success('Employee added successfully');
          navigate('/');
        })
        .catch(() => toast.error('Failed to add employee'));
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit} noValidate style={{ maxWidth: '400px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          <div style={{ color: 'red' }}>{errors.name}</div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          <div style={{ color: 'red' }}>{errors.email}</div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Department</label><br />
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px' }}
          />
          <div style={{ color: 'red' }}>{errors.department}</div>
        </div>

        <button type="submit" style={{ padding: '10px 15px' }}>
          {id ? 'Update' : 'Add'} Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
