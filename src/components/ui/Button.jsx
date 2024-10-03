// src/components/ui/Button.jsx
import React from 'react';

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md"
    >
      {children}
    </button>
  );
}
