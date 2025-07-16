import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext } from '@hello-pangea/dnd';
import FormTitleBar from '../components/FormTitleBar';
import AddInputButtons from '../components/AddInputButtons';
import DraggableFieldList from '../components/DraggableFieldList';

const CreateForm = () => {
  const [title, setTitle] = useState('Untitled Form');
  const [inputs, setInputs] = useState([]);
  const navigate = useNavigate();

  const addInput = (type) => {
    if (inputs.length >= 20) return alert('Maximum of 20 inputs allowed.');
    setInputs([...inputs, {
      id: Date.now().toString(),
      type, label: '', placeholder: '',
    }]);
  };

  const handleInputChange = (id, field, value) => {
    setInputs(inputs.map(input => input.id === id ? { ...input, [field]: value } : input));
  };

  const deleteInput = (id) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  const saveForm = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/form/create`, { title, inputs })
      .then(() => navigate('/'))
      .catch(err => console.error('Error creating form!', err));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = [...inputs];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setInputs(reordered);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-8">
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

export default CreateForm;
