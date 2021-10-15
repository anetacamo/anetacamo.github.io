import React, { useState } from 'react';

import { Link } from 'react-router-dom';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const passwordConfirmTwo = useRef();

  {
    /* async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('oops. passwords do not match.');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
    } catch {
      setError('failed to crate an account');
    }
    setLoading(false);
  */
  }

  return (
    <div>
      <br />
      <br />
      <h2>sign up</h2>
      <p className='pink'>{error}</p>

      <form>
        <label>
          Name:
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='imnice@gmail.com'
            required
          />
        </label>
        <label>
          Password:
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Password confirmation:
          <input
            type='text'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </label>

        <input type='submit' value='Submit' disabled={loading} />
      </form>
      <p>
        Aleaady have an account? <Link to='/login'>Log in.</Link>
      </p>
    </div>
  );
}
export default SignUp;
