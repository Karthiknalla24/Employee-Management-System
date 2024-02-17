// Define an object template for an employee
class Employee {
    constructor(name, age, department, salary) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }
}

// Sample employees data
const employees = [
    new Employee('John Doe', 30, 'HR', 50000),
    new Employee('Jane Smith', 35, 'Finance', 60000),
    new Employee('Alice Johnson', 25, 'IT', 55000)
];

// Calculate Average Salary
function calculateAverageSalary() {
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    const averageSalary = totalSalary / employees.length;
    document.getElementById('output').innerText = `Average Salary: ${averageSalary.toFixed(2)}`;
}

// Find Employees in a Department
function findEmployeesByDepartment() {
    const department = prompt("Enter department name:");
    const departmentEmployees = employees.filter(employee => employee.department === department);
    document.getElementById('output').innerText = `Employees in ${department} department: ${JSON.stringify(departmentEmployees)}`;
}

// Increase Salary for Employees
function increaseSalary() {
    const percentage = parseFloat(prompt("Enter percentage increase:"));
    employees.forEach(employee => {
        employee.salary *= (1 + percentage / 100);
    });
    document.getElementById('output').innerText = "Salary increased successfully!";
}

// Sort Employees by Age
function sortEmployeesByAge() {
    const sortedEmployees = employees.slice().sort((a, b) => a.age - b.age);
    document.getElementById('output').innerText = `Employees sorted by age: ${JSON.stringify(sortedEmployees)}`;
}
