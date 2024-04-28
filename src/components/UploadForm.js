import React, { useState } from 'react';
import axios from 'axios';
import { useStudents } from '../contexts/StudentContext';

function UploadForm() {
  const [file, setFile] = useState(null);
  const { fetchStudents } = useStudents();

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("studentcsv", file);

    axios.post("http://127.0.0.1:8000/student/addFromCSV", formData)
      .then(response => {
        alert('File successfully uploaded');
        fetchStudents();  // Refresh the student list
      })
      .catch(error => alert('Error uploading file:', error));
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>
        Upload!
      </button>
    </div>
  );
}

export default UploadForm;
