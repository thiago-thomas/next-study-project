import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/tab-01">Tab01</Link>
        <Link href="/tab-02">Tab02</Link>
      </nav>
      <div>{children}</div>
    </>
  )
}