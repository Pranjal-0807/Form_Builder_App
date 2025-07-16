import React from 'react'

const FormTitleBar = ({ title, setTitle, saveForm }) => (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl font-semibold w-full md:w-3/4 px-4 py-3 border-2 border-blue-100 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Form Title..."
        />
        <button
            onClick={saveForm}
            className="text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-md transition hover:scale-105"
        >
            💾 Save Form
        </button>
    </div>
);

export default FormTitleBar;
