import React from 'react'
import classNames from 'classnames'

export default function Input({
  error = undefined,
  ...props
}) {
  return (
    <div>
      <input 
        {...props}
        className={classNames(
          "border border-gray-400 w-full rounded py-3.5 px-4",
          error && "border-red-400"
        )}
      />
      {error && (
        <div className="text-red-400">{error}</div>
      )}
    </div>
  )
}
