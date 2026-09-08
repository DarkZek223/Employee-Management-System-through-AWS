const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update Website",
        taskDescription: "Revamp the landing page with new layout.",
        taskDate: "2025-08-01",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Bug #402",
        taskDescription: "Resolve login redirect issue.",
        taskDate: "2025-08-02",
        category: "Bug Fixing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write Documentation",
        taskDescription: "Add API docs for user module.",
        taskDate: "2025-07-30",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 2,
    firstName: "Jackson",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Logo",
        taskDescription: "Create a modern logo for the new brand.",
        taskDate: "2025-07-28",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Client Presentation",
        taskDescription: "Prepare and deliver presentation to client.",
        taskDate: "2025-08-03",
        category: "Client Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 }
  },
  {
    id: 3,
    firstName: "Vivaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Backend Optimization",
        taskDescription: "Improve database query performance.",
        taskDate: "2025-08-01",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Report Generation",
        taskDescription: "Automate weekly report generation.",
        taskDate: "2025-07-31",
        category: "Automation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Security Review",
        taskDescription: "Audit code for vulnerabilities.",
        taskDate: "2025-07-29",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 }
  },
  {
    id: 4,
    firstName: "Arjun",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Social Media Campaign",
        taskDescription: "Launch campaign for product marketing.",
        taskDate: "2025-08-02",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Weekly sync-up with design team.",
        taskDate: "2025-08-01",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCounts: { active: 2, newTask: 1, completed: 0, failed: 0 }
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Test Payment Gateway",
        taskDescription: "Ensure payment flow works across devices.",
        taskDate: "2025-07-30",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Error Logging Setup",
        taskDescription: "Integrate Sentry for error tracking.",
        taskDate: "2025-08-01",
        category: "Monitoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review code submissions from team.",
        taskDate: "2025-07-29",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 }
  }
];

const admin = [
  {
    id: 101,
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  
  return {employees, admin};
}