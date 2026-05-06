import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ background: 'var(--bg-primary)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-mono)' }}>
          <span style={{ color: 'var(--term-green)' }}>$</span> mail --to hanjieun
        </h2>
        <div style={{ 
          background: 'var(--bg-secondary)', 
          padding: 'var(--spacing-xl) var(--spacing-lg)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          display: 'inline-block',
          width: '100%',
          maxWidth: '700px'
        }}>
          <p style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)', fontFamily: 'var(--font-mono)' }}>
            Ready to start a new project or just want to say hi?
          </p>
          <a href="mailto:hanjieun9874@gmail.com" style={{ 
            display: 'inline-block',
            padding: '12px 24px', 
            background: 'var(--text-primary)', 
            color: 'var(--bg-primary)', 
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            fontFamily: 'var(--font-mono)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            ./send_email.sh
          </a>
          <p style={{ marginTop: 'var(--spacing-lg)', fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            hanjieun9874@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
