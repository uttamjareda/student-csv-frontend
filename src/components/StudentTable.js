import React, { useEffect } from 'react';
import { useStudents } from '../contexts/StudentContext';

function StudentTable() {
  const { students, fetchStudents, deleteAllStudents, setPage } = useStudents();

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div>
      <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
      <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      <button onClick={deleteAllStudents}>Delete All</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>School</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.subject || 'N/A'}</td>
              <td>{student.school}</td>
              <td>{student.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
