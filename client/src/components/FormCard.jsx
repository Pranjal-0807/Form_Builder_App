import React from 'react';
import { Link } from 'react-router-dom';

const FormCard = ({ form, onDelete }) => {
    return (
        <div
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xl font-bold shadow-inner">
                    {form.title.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-xl font-bold text-gray-900 truncate">
                    {form.title}
                </h2>
            </div>

            <div className="flex justify-between mt-6 space-x-2">
                <Link to={`/form/${form._id}`} className="w-full">
                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-medium shadow transition">
                        View
                    </button>
                </Link>
                <Link to={`/form/${form._id}/edit`} className="w-full">
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-lg font-medium shadow transition">
                        Edit
                    </button>
                </Link>
                <button
                    onClick={() => onDelete(form._id)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium shadow transition"
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default FormCard;