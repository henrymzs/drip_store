import React from 'react';
export default function Button({ text, type = "button", onClick }) {
    return (
        <button className='bg-pink-600 py-2 px-4 text-white rounded-md  hover:scale-105'
            type={type}
            onClick={onClick}
        >
            Entrar
        </button>
    );
}
