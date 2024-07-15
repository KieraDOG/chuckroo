import React from 'react'
import classNames from 'classnames'

export default function Circle({
  children,
  component: Component = 'div',
  bordered = false,
}) {
  return (
    <Component 
      className={classNames(
        'w-[30px] h-[30px] rounded-full', 
        bordered && 'border-2 border-gray-200'
      )}
    >
      {children}
    </Component>
  )
}

function sum(a, b) {
  return a + b
}
