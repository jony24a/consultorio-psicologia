// src/components/ui/Card.jsx
import React from 'react';

export function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="font-bold text-lg mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function CardContent({ children }) {
  return <div className="text-gray-700">{children}</div>;
}
