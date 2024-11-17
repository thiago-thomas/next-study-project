'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav>
      <Link className={`link px-3 ${pathname === '/' ? 'underline' : ''}`} href='/'>Home</Link>
      <Link className={`link px-3 ${pathname === '/dashboard' ? 'underline' : ''}`} href='/dashboard'>Dashboard</Link>
      <Link className={`link px-3 ${pathname === '/about' ? 'underline' : ''}`} href='/about'>About</Link>      </nav>
  )

}