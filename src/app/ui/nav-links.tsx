'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav>
      <Link className={`link px-3 ${pathname === '/' ? 'underline' : ''}`} href='/'>Home</Link>
      <Link className={`link px-3 ${pathname === '/dashboard' ? 'underline' : ''}`} href='/dashboard'>Dashboard</Link>
      <Link className={`link px-3 ${pathname === '/about' ? 'underline' : ''}`} href='/about'>About</Link>      
      <Link className={`link px-3 ${pathname === '/interception' ? 'underline' : ''}`} href='/interception'>Interception</Link>      
      <Link className={`link px-3 ${pathname === '/en' ? 'underline' : ''}`} href='/en'>English Lang</Link>      
      <Link className={`link px-3 ${pathname === '/pt' ? 'underline' : ''}`} href='/pt'>Portuguese Lang</Link>      
    </nav>
  )

}