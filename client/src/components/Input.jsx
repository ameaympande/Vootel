import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

function Input({ name, type, placeholder, value, onChange, fontSize, error, autoComplete }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <input
                name={name}
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                className={`border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-2 focus:outline-none focus:border-primary-light w-full bg-[#ecf3f9] pr-10 ${fontSize}`}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-1 flex items-center px-3 bg-transparent"
                >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
            )}
            {error && <p className="text-red-500 text-xs absolute top-full mt-1 left-0 text-center">{error}</p>}
        </div>
    );
}

export default Input;
