import React, { useState } from "react";

export function Tabs({ children, defaultValue, className }) {
  const [value, setValue] = useState(defaultValue);
  const context = { value, setValue };
  return <div className={className}>{React.Children.map(children, child => React.cloneElement(child, { context }))}</div>;
}

export function TabsList({ children, className, context }) {
  return <div className={`flex gap-2 mb-4 ${className}`}>{children.map(child => React.cloneElement(child, { context }))}</div>;
}

export function TabsTrigger({ children, value, context }) {
  const active = context.value === value;
  return (
    <button
      className={`px-4 py-2 text-sm rounded-md ${active ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      onClick={() => context.setValue(value)}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children, value, context }) {
  return context.value === value ? <div>{children}</div> : null;
}
