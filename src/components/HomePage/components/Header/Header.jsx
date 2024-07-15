import React from 'react'
import Logo from '../../../Logo'
import SearchBar from '../../../SearchBar'
import Authentication from './components/Authentication'

export default function Header() {
  return (
    <div className="border-b-2 border-gray-200">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex justify-between items-center">
          <Logo />
          <SearchBar />
          <Authentication />
        </div>
      </div>
    </div>
  )
}
