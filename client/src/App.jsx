import axios from 'axios';
import Header from './components/Header';
import FormCard from './components/FormCard';
import React, { useState, useEffect } from 'react';

function App() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/forms`)
      .then(response => {
        setForms(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the forms!', error);
      });
  };

  const deleteForm = (id) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/form/${id}`)
      .then(() => {
        fetchForms();
      })
      .catch(error => {
        console.error('There was an error deleting the form!', error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <div className="container mx-auto px-6 py-10">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(forms) && forms.map(form => (
            <FormCard key={form._id} form={form} onDelete={deleteForm} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
