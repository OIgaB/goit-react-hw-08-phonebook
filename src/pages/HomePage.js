import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
        Welcome to our user-friendly phonebook app, your ultimate solution for contact management. Sign up, log in, and effortlessly create, update, and delete contacts, while enjoying the convenience of making calls within the app. Experience seamless connectivity and stay organized with ease. {' '}
        <span role="img" aria-label="phone">☎️</span>
    </h1>
  </div>
);

export default HomePage;