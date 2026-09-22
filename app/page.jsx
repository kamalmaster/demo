import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '8rem 2rem',
        textAlign: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.6
        }}>
          <Image 
            src="/images/hero.jpg" 
            alt="Hero Background" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
        
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1 }}>
          Building Digital Products That <span className="text-gradient">Drive Results</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', marginBottom: '3rem' }}>
          I'm a product Engineer and developer specializing in creating premium, high-conversion experiences for web and mobile.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/projects" style={{
            padding: '1rem 2rem',
            borderRadius: '8px',
            background: 'var(--foreground)',
            color: 'var(--background)',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}>
            View My Work
          </Link>
          <Link href="/about" style={{
            padding: '1rem 2rem',
            borderRadius: '8px',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            color: 'var(--foreground)',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}>
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Services/Features Section */}
      <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'UX/UI Design', desc: 'Crafting intuitive, user-centric interfaces that engage and convert.' },
            { title: 'Frontend Dev', desc: 'Building fast, responsive web apps using modern frameworks like React and Next.js.' },
            { title: 'Design Systems', desc: 'Creating scalable design languages for consistent brand experiences.' }
          ].map((service, i) => (
            <div key={i} className="glass" style={{ padding: '2rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-purple))', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: '#aaa' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
