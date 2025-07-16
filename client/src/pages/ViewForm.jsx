import axios from 'axios';
import FormField from '../components/FormField';
import React, { useState, useEffect } from 'react';
import FormWrapper from '../components/FormWrapper';
import { useNavigate, useParams } from 'react-router-dom';

const ViewForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/form/${id}`)
      .then(res => setForm(res.data))
      .catch(err => console.error('Error fetching form!', err));
  }, [id]);

  const handleInputChange = (inputId, value) => {
    setResponses(prev => ({ ...prev, [inputId]: value }));
  };

  const handleSubmit = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/form/${id}/submit`, responses)
      .then(() => {
        alert('Form submitted successfully!');
        navigate('/');
      })
      .catch(err => console.error('Error submitting form!', err));
  };

  if (!form) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto px-6">
        <FormWrapper title={form.title}>
          <div className="flex flex-col gap-2">
            {form.inputs.map((input) => (
              <FormField
                key={input._id}
                input={input}
                onChange={handleInputChange}
              />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <SubmitButton onSubmit={handleSubmit} />
          </div>
        </FormWrapper>
      </div>
    </div>
  );
};

export default ViewForm;

const SubmitButton = ({ onSubmit }) => (
  <button
    onClick={onSubmit}
    className="w-full bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition transform hover:scale-105"
  >
    🚀 Submit Response
  </button>
);
