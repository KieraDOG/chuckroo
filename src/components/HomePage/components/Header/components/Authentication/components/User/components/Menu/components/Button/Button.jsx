import React from 'react'

export default function Button({ 
  children,
  onClick
}) {
  return (
    <button 
      onClick={onClick}
      className="
        w-full text-left px-6 py-2
        border-r-2 border-transparent 
        hover:border-black hover:bg-gray-100
      "
    >
      {children}
    </button>
  )
}
