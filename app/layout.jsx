import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A simple portfolio website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <header>
            <div className="title">Portfolio.</div>
            <nav className="nav-links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
