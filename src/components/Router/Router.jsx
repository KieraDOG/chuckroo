import React, { useState } from 'react'
import RouterContext from './RouterContext'

export default function Router({
  children
}) {
  const [pathname, setPathname] = useState(window.location.pathname)

  const push = (value) => {
    setPathname(value)
    window.history.pushState({}, '', value)
  }

  return (
    <RouterContext.Provider value={{ pathname, push }}>
      {children}
    </RouterContext.Provider>
  )
}
