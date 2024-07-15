import React from 'react'
import { LuExternalLink } from "react-icons/lu";
import Link from '../../../Router/Link';

export default function ExternalLink({ 
  href,
  children,
 }) {
  return (
    <Link target="_blank" className="flex gap-0.5 items-center" href={href}>
      {children}
      <LuExternalLink />
    </Link>
  )
}
