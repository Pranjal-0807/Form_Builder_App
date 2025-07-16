import React from 'react'

const FieldCard = ({ input, onChange, onDelete }) => (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="space-y-3">
            <input
                type="text"
                value={input.label}
                onChange={(e) => onChange(input.id, 'label', e.target.value)}
                placeholder="Field Label"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="text"
                value={input.placeholder}
                onChange={(e) => onChange(input.id, 'placeholder', e.target.value)}
                placeholder="Field Placeholder"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <input
                type={input.type}
                placeholder={input.placeholder}
                readOnly
                className="w-full bg-gray-100 border border-gray-200 text-gray-600 rounded-lg px-4 py-2 cursor-not-allowed"
            />
            <div className="flex justify-end">
                <button
                    onClick={() => onDelete(input.id)}
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
                >
                    🗑️ Delete Field
                </button>
            </div>
        </div>
    </div>
);

export default FieldCard;
