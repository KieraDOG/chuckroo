import React, { useEffect, useRef, useState } from 'react'
import AvatarSVG from './assets/avatar.svg'
import Menu from './components/Menu'
import Circle from '../Circle'

export default function User({
  onLogOut,
}) {
  const [showMenu, setShowMenu] = useState(false)
  const triggerRef = useRef()

  useEffect(() => {    
    const handleMenuClose = (event) => {
      if (triggerRef.current.contains(event.target)) {
        return
      }

      setShowMenu(false)
    }

    document.addEventListener('click', handleMenuClose)

    return () => {
      document.removeEventListener('click', handleMenuClose)
    }
  }, [])

  return (
    <Circle>
      <div className="relative">
        <button 
          ref={triggerRef}
          onClick={() => setShowMenu(true)}
        >
          <AvatarSVG />
        </button>
        {showMenu && <Menu onLogOut={onLogOut} />}
      </div>
    </Circle>
  )
}
