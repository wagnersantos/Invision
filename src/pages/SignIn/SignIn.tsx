import React from 'react';

import Styles from './signin.scss';
import Data from '@/core/assets/images/data.png';

const SignIn: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
        <img src={Data} alt="Marcenas mattis egestas" />
        <p>Marcenas mattis egestas</p>
        <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
      </div>

      <div className={Styles.aside}>

        <h1>Invision</h1>
        <form>
          <h2>Welcome to Invision</h2>
          <input type="text" name="email" placeholder="Users name or Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot password</a>
          <button type="submit">Sign in</button>
        </form>

        <span>or</span>
        <a href="#">Sign in with Google</a>

        <span>
          New Invision?
        <a href="#"> Create Account</a>
        </span>
      </div>
    </div>
  );
}

export default SignIn;
