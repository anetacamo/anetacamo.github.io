import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // const passwordConfirmTwo = useRef();
  {
    /* 
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      history.push('/');
    } catch {
      setError('failed to sign up');
    }
    setLoading(false);
  }
*/
  }
  return (
    <div>
      <br />
      <br />
      <h2>log in</h2>
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

        <input type='submit' value='Submit' disabled={loading} />
      </form>
      <p>
        Do not have an account yet? <Link to='/signup'>Sign up</Link>
      </p>
    </div>
  );
}
export default SignUp;
