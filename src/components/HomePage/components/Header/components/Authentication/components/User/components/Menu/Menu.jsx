import React from 'react'
import Button from './components/Button'

export default function Menu({
  onLogOut
}) {
  return (
    <div className="
      absolute right-0
      bg-white
      border-2 rounded border-gray-200
      py-2.5
      space-y-2.5
    ">
      <Button>Notifications</Button>
      <Button>Blogs</Button>
      <Button>Comments</Button>
      <Button>User profile</Button>
      <Button onClick={onLogOut}>Log out</Button>
    </div>
  )
}
