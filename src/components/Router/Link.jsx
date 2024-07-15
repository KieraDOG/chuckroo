import React from 'react'
import useRouter from './useRouter'

export default function Link({
  href,
  children,
  className,
  target,
}) {
  const { push } = useRouter()

  function handleClick(event) {
    if (target === '_blank') {
      return
    }

    event.preventDefault()

    push(href)
  }

  return (
    <a
      target={target}
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
