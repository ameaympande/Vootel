
import React from "react";

function Button({ type, onClick, children, className }) {
    return (
        <button
            type={type}
            className={`w-full bg-background-darker hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded-xl ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
