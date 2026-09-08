import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider.jsx';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  // Restore login after page refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);

      setUser(userData.role);

      if (userData.data) {
        setloggedInUserData(userData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {

    // ADMIN LOGIN
    if (email === "Admin@gmail.com" && password === "123") {
      setUser("Admin");

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "Admin"
        })
      );

      return;
    }

    // Wait for AWS data
    if (!authData || !authData.employees) {
      alert("Employee data is still loading from AWS. Please try again.");
      return;
    }

    // GET EMPLOYEES FROM AWS DATA
    const employees = authData.employees;

    console.log("Employees from AWS:", employees);

    // FIND EMPLOYEE
    const employee = employees.find(
      (emp) =>
        emp.email === email &&
        emp.password === password
    );

    if (employee) {

      setUser("Employee");
      setloggedInUserData(employee);

      // Save current login
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "Employee",
          data: employee
        })
      );

      console.log("Logged in employee:", employee);
      console.log("Employee Tasks:", employee.tasks);

    } else {
      alert("Invalid Credentials");
    }
  };

  // Optional loading screen while AWS data is loading
  if (authData === null) {
    return <div>Loading data from AWS...</div>;
  }

  return (
    <div>

      {!user && (
        <Login RohanLogin={handleLogin} />
      )}

      {user === 'Admin' && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === 'Employee' && loggedInUserData && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}

    </div>
  );
};

export default App;