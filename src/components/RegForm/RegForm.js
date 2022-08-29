import { useState } from 'react';

import styles from './RegForm.module.css';

export default function RegForm({ onClose, onLogIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '1' && password === '1') {
      setLoginError(false);
      onLogIn();
      onClose();
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Please, log in</h1>
      <form className={styles.form}>
        <label className={styles.label}>
          {' '}
          Username
          <input
            className={styles.input}
            name='username'
            type='text'
            placeholder='Username'
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </label>
        <label className={styles.label}>
          Passowrd
          <input
            className={styles.input}
            name='password'
            type='password'
            placeholder='Pasword'
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </label>
        {loginError && (
          <div className={styles.error}>Wrong Username or Password</div>
        )}
        <button
          className={styles.button}
          name='button'
          type='submit'
          onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
