import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'SaaS Analytics Dashboard',
      category: 'Web Application',
      image: '/images/project1.jpg',
      desc: 'A high-performance analytics dashboard for a leading marketing SaaS, featuring real-time data visualization and a dark-mode first design.'
    },
    {
      title: 'Fintech Mobile App',
      category: 'Mobile Design',
      image: '/images/hero.jpg', // Reusing placeholder for now
      desc: 'Sleek, secure, and intuitive mobile banking experience designed to simplify personal finance management for Gen Z users.'
    },
    {
      title: 'E-commerce Redesign',
      category: 'UX/UI & Frontend',
      image: '/images/project1.jpg', // Reusing placeholder
      desc: 'Complete overhaul of a luxury fashion retailer, resulting in a 40% increase in mobile conversions.'
    }
  ]

  return (
    <div style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Selected <span className="text-gradient">Works</span></h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
          A showcase of my recent projects, demonstrating my expertise in product design and frontend development.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass" style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            gap: '2rem',
            padding: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 400px', position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ flex: '1 1 300px', padding: '2rem' }}>
              <span style={{ color: 'var(--accent-pink)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {project.category}
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{project.title}</h2>
              <p style={{ color: '#ccc', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                {project.desc}
              </p>
              <button style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                background: 'transparent',
                border: '1px solid var(--primary)',
                color: 'var(--primary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}>
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
