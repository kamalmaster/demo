export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--card-border)',
      marginTop: '4rem'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Let's Work Together</h2>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>Ready to build something amazing?</p>
      <a href="mailto:hello@example.com" style={{
        padding: '1rem 2rem',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-purple))',
        color: 'white',
        fontWeight: 600,
        fontSize: '1.1rem',
        border: 'none',
        cursor: 'pointer'
      }}>
        Start a Conversation
      </a>
      <div style={{ marginTop: '4rem', color: '#666', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
