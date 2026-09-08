import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const API_URL =
  "https://o0kconoqk1.execute-api.us-east-1.amazonaws.com/dev/employees";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Failed to load employees: ${response.status}`);
        }

        const employees = await response.json();

        console.log("Employees from AWS:", employees);

        setUserData({
          employees: employees,
          admin: []
        });

      } catch (error) {
        console.error("Error loading employees from AWS:", error);

        // Prevent blank screen if AWS request fails
        setUserData({
          employees: [],
          admin: []
        });
      }
    };

    loadEmployees();
  }, []);

  // Wait for AWS before rendering App
  if (userData === null) {
    return <div>Loading employees from AWS...</div>;
  }

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;