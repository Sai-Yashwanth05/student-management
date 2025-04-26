
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/${id}`);
    setStudents(students.filter(student => student._id !== id));
    alert('Student deleted!');
  };

  return (
    <div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Email</th><th>Course</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <Link to={`/edit/${student._id}`}>Edit</Link> | 
                <button onClick={() => deleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
