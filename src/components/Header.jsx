import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ backgroundColor: '#111827', color: '#fff' }}>
      <nav style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{ fontWeight: 'bold' }}>My Team Site</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="/" style={{ color: '#fff' }}>Home</Link>
          <Link href="/members" style={{ color: '#fff' }}>Members</Link>
        </div>
      </nav>
    </header>
  )
}
