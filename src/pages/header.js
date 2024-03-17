import React from 'react';

const styles = {
  header: {
    position: 'absolute',
    top: '0',
    left: '0',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '10px',
  },
  message: {
    fontSize: '1rem',
    color: '#666',
  },
};

const header = () => {
  return (
    <div style={styles.header}>
      <h1 style={styles.title}>Coffeehub</h1>
      <p style={styles.message}>Your one-stop destination for delicious coffee!</p>
    </div>
  );
};

export default header;
