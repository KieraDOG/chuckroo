import React from 'react'
import Logo from '../Logo'
import Watermark from '../Watermark'

export default function AuthenticationLayout({
  title,
  footer,
  children,
}) {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-gray-100 px-[130px] py-24">
        <div className="space-y-2">
          <Logo />
          <Watermark />
        </div>
      </div>
      <div className="w-1/2 px-[130px] py-24 space-y-4">
        <h1 className="text-3xl">
          {title}
        </h1>
        {children}
        <div className="pt-12 border-b border-gray-200"  />
        <div>
          {footer}
        </div>
      </div>
    </div>
  )
}
