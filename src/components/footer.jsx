import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.contact}> nour3che@gmail.com: تواصل معنا  </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Tajawal, sans-serif',
  },
  contact: {
    fontSize: '18px',
  },
};

export default Footer;
