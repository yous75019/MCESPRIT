import React from "react";

export function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-blue-600 text-white rounded-md hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
}
