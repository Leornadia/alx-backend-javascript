export default function createEmployeesObject(departmentName, employees) {
  const departmentObj = {};
  departmentObj[departmentName] = employees;
  return departmentObj;
}

