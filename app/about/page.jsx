'use client'

import Image from 'next/image';

export default function About() {
  return (
    <div style={{ padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>About <span className="text-gradient">Me</span></h1>
      
      <div className="glass" style={{ 
        padding: '3rem', 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '4rem', 
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {/* Image Container */}
        <div style={{ 
          flex: '1 1 300px', 
          display: 'flex', 
          justifyContent: 'center' 
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '350px',
            aspectRatio: '1/1',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid var(--card-border)'
          }}>
            <Image 
              src="/images/profile.png" 
              alt="Profile Picture" 
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
          </div>
        </div>

        {/* Text Container */}
        <div style={{ flex: '2 1 400px' }}>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            I am a passionate digital creator with a focus on building premium, high-performance web applications. My background bridges the gap between design and engineering, allowing me to craft experiences that are not only visually stunning but also technically robust.
          </p>
          <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Over the past 5 years, I've worked with startups and enterprise companies alike to elevate their digital presence. I believe in the power of micro-interactions, clean typography, and seamless performance.
          </p>
          
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>My Toolbox</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {['React', 'Next.js', 'TypeScript', 'Figma', 'Framer Motion', 'Tailwind CSS', 'Node.js'].map(tech => (
              <span key={tech} style={{
                padding: '0.6rem 1.2rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--card-border)',
                borderRadius: '30px',
                fontSize: '0.9rem',
                color: '#ccc',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--accent-pink)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 78, 175, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
                e.currentTarget.style.color = '#ccc';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
