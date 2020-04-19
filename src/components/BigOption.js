import React from 'react'

export default function BigOption({ title, children }) {
  return (
    <div className="w-full lg:w-1/2 px-4 py-4">
      <div className="bg-white sm:border shadow">
        <div className="border-b bg-gray-200">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-blue-dark py-4 font-normal text-lg">{title}</h3>
          </div>
        </div>
        <div>
          <div className="text-center px-6 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}