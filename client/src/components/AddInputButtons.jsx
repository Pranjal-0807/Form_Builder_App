import React from 'react'
import { inputFieldOptions } from '../utils/inputFieldOptions'

const AddInputButtons = ({ addInput }) => {
    // const types = ['text', 'email', 'password', 'number', 'date'];
    return (
        <div className="flex flex-wrap gap-3 mb-8">
            {inputFieldOptions.map(type => (
                <button
                    key={type}
                    onClick={() => addInput(type)}
                    className="bg-white hover:bg-blue-100 border border-gray-200 text-blue-600 font-medium py-2 px-5 rounded-full shadow-sm transition"
                >
                    ➕ {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default AddInputButtons;
