import React from 'react';

// Basic Header component placeholder
const Header = () => (
  <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
    <h1>CloudOver Digital</h1>
    <nav>
      <a href="/">Home</a> | <a href="/about">About</a> | <span>Services...</span>
    </nav>
  </header>
);

// Basic Footer component placeholder
const Footer = () => (
  <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '50px' }}>
    &copy; {new Date().getFullYear()} CloudOver Company. Mission Ready.
  </footer>
);

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}