import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const StudentContext = createContext();

export const useStudents = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);

  const fetchStudents = () => {
    axios.get(`http://127.0.0.1:8000/student/getAll?page=${page}`)
      .then(response => {
        setStudents(response.data.students || []);
      })
      .catch(error => console.error('Error fetching students:', error));
  };

  const deleteAllStudents = () => {
    axios.delete("http://127.0.0.1:8000/student/deleteAll")
      .then(response => {
        alert('All students deleted!');
        setStudents([]);  // Clear the student state or refetch
      })
      .catch(error => console.error('Error deleting all students:', error));
  };

  return (
    <StudentContext.Provider value={{ students, fetchStudents, deleteAllStudents, setPage }}>
      {children}
    </StudentContext.Provider>
  );
};
