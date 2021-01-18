import React from 'react';
import { Link } from 'react-router-dom';

function Signin(props) {
  return (
    <div>
      Simple Flight Check
      <form>
        <span>Логин:</span>
        <input required type="email"></input>
        <span>Пароль:</span>
        <input required type="password" pattern="[A-Za-z\d]{8,}"></input>
        <Link to="/flights">
          <button>Войти</button>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
