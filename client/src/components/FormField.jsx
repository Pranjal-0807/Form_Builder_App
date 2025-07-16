import React from "react";

const FormField = ({ input, onChange }) => (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <label className="text-gray-700 font-medium mb-1 block">
            {input.label}
        </label>
        <input
            type={input.type}
            placeholder={input.placeholder}
            onChange={(e) => onChange(input._id, e.target.value)}
            className="w-full mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
    </div>
);

export default FormField;
