import React from "react";

const FormWrapper = ({ title, children }) => (
    <div className="bg-white border border-gray-300 rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-10 drop-shadow-sm">
            {title}
        </h1>
        {children}
    </div>
);

export default FormWrapper;
