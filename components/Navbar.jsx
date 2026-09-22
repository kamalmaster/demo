import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 2rem',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      background: 'rgba(13, 15, 18, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--card-border)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="text-gradient">
        Portfolio.
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link href="/" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Home</Link>
        <Link href="/about" style={{ fontWeight: 500, transition: 'color 0.2s' }}>About</Link>
        <Link href="/projects" style={{ fontWeight: 500, transition: 'color 0.2s' }}>Projects</Link>
      </div>
      <a href="mailto:hello@example.com" style={{
        padding: '0.6rem 1.2rem',
        borderRadius: '8px',
        background: 'var(--foreground)',
        color: 'var(--background)',
        fontWeight: 600,
        fontSize: '0.9rem',
        transition: 'transform 0.2s'
      }}>
        Contact Me
      </a>
    </nav>
  );
}
