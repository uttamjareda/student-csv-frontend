import React from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import { StudentProvider } from './contexts/StudentContext';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <StudentProvider>
        <header className="App-header">
          <UploadForm />
          <StudentTable />
        </header>
      </StudentProvider>
    </div>
  );
}

export default App;
