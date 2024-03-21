import { useEffect, useState } from "react";
import UserCheckbox from "../components/UserCheckbox";
import Spinner from "../components/Spinner";

function TestHome() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);

  //create state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  console.log(employees);
  console.log(employee);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/employees");
      const data = await response.json();

      setEmployees(data.data);
    };

    fetchData();
  }, []);

  const employeeId = "65f4e2ecda864ac3a80598a6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/employees/${employeeId}`);
        const data = await response.json();

        setEmployee(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleCreateEmployee = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        role,
      }),
    });

    const data = await response.json();

    console.log(data);

    // route to employees list
  };

  const handleDeleteEmployee = async (id) => {
    console.log(id, "id to delete clicked");

    const response = await fetch(`http://localhost:3000/api/employees/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    // refresh page or route to employee list
  };

  return (
    <>
      <ul>
        {employees.map((e) => (
          <UserCheckbox
            key={e._id}
            name={e.name}
            id={e._id}
            handleDeleteEmployee={handleDeleteEmployee}
          />
        ))}
      </ul>

      <button className="bg-blue-800 mt-2">Submit</button>

      {employee && <h2>Employee by id: {employee.name}</h2>}
      <Spinner />

      <h1>Create Employee</h1>

      <form onSubmit={handleCreateEmployee}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={role} onChange={(e) => setRole(+e.target.value)} />
        <button>Create</button>
      </form>
    </>
  );
}

export default TestHome;
