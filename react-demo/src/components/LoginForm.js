import React from 'react'

function LoginForm() {
  return (
    <form>
        <h2>Login</h2>
        <label>
            Username : 
            <input type='text' />
        </label>
        <label>
            Password : 
            <input type='password' />
        </label>
        <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm