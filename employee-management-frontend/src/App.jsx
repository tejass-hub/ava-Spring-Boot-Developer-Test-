import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Employee Management System</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Employee List</Link>
          <Link to="/add">Add Employee</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
