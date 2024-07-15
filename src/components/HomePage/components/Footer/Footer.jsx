import React from 'react'
import Logo from '../../../Logo'
import Website from './components/Website'
import Team from './components/Team'
import Legal from './components/Legal'
import ShareLink from './components/ShareLink'
import Watermark from '../../../Watermark'

export default function Footer() {
  return (
    <div>
      <h2>Footer</h2>
      <Logo />
      <Website />
      <Team />
      <Legal />
      <ShareLink />
      <Watermark />
    </div>
  )
}
