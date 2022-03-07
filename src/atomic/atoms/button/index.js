import React from 'react';

export const Button = ({ children, ...res }) => {
  return (
    <button className="bg-blue-600 w-full m-3 py-2 px-1 rounded-sm text-white" {...res}>
      {children}
    </button>
  );
};
