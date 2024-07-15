import React from 'react'
import LogoSVG from './assets/logo.svg'
import Link from '../Router/Link'

export default function Logo() {
  return (
    <Link href="/">
      <LogoSVG />
    </Link>
  )
}
