import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/students", form);
    alert("Student added!");
    history.push("/students");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
        type="number"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="Course"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
