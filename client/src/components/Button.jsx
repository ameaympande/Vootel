
import React from 'react';

function Button({ onClick, children, className }) {
    return (
        <button className={`w-full bg-background-primary hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded-xl ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
