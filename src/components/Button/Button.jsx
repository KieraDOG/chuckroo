import React from 'react'
import classNames from 'classnames'

export default function Button({
  onClick,
  children,
  fullWidth = false,
  size = 'base',
}) {
  return (
    <button 
      onClick={onClick} 
      className={classNames(
        "bg-black text-white rounded", 
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'base' && 'px-4 py-3.5 text-base',
        fullWidth && "w-full",
      )}
    >
      {children}
    </button>
  )
}
