import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import FormTitleBar from '../components/FormTitleBar';
import { useParams, useNavigate } from 'react-router-dom';
import AddInputButtons from '../components/AddInputButtons';
import DraggableFieldList from '../components/DraggableFieldList';

const EditForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/form/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setInputs(res.data.inputs);
      })
      .catch(err => console.error('Error fetching form:', err));
  }, [id]);

  const addInput = (type) => {
    if (inputs.length >= 20) return alert('Maximum of 20 inputs allowed.');
    setInputs([...inputs, {
      id: Date.now(),
      type, label: '', placeholder: '',
    }]);
  };

  const handleInputChange = (id, field, value) => {
    setInputs(inputs.map(input =>
      input.id === id ? { ...input, [field]: value } : input
    ));
  };

  const deleteInput = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  const saveForm = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/form/${id}/edit`, { title, inputs })
      .then(() => navigate('/'))
      .catch(err => console.error('Error updating form:', err));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = [...inputs];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setInputs(reordered);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10">
      <div className="container mx-auto px-6">
        <FormTitleBar title={title} setTitle={setTitle} saveForm={saveForm} />
        <AddInputButtons addInput={addInput} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <DraggableFieldList
            inputs={inputs}
            handleInputChange={handleInputChange}
            deleteInput={deleteInput}
          />
        </DragDropContext>
      </div>
    </div>
  );
};

export default EditForm;
