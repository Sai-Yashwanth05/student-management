import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  const { id } = useParams();
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
  });

  useEffect(() => {
    axios
      .get(`https://student-management-backend-sv4h.onrender.com/students/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://student-management-backend-sv4h.onrender.com/students/${id}`, form);
    alert("Student updated successfully!");
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
      <button type="submit">Update Student</button>
    </form>
  );
}

export default EditStudent;
