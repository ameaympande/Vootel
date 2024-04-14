import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

function Input({ type, placeholder, value, onChange, fontSize }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <input
                type={showPassword ? 'text' : type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary-light w-full bg-[#ecf3f9] pr-10 ${fontSize}`}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent"
                >
                    {showPassword ? <Eye /> : <EyeOff />}
                </button>
            )}
        </div>
    );
}

export default Input;
