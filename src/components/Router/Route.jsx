import React from 'react'
import useRouter from './useRouter'

export default function Route({
  path,
  children
}) {
  const { pathname } = useRouter()

  if (pathname !== path) {
    return null
  }

  return children
}
