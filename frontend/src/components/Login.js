import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({handleLogin}){
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

const handleChange =(e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formValue.email || !formValue.password){
        return;
      }
  handleLogin(formValue.email, formValue.password)
} 

return (
  <div className="register">
    <p className="register__name">Вход</p>
    <form className="register__form" onSubmit={handleSubmit}>
      <div className="register__input">
        <input
          id="email"
          type="email"
          name="email"
          value={formValue.email || ""}
          onChange={handleChange}
          placeholder="Email"
          className="register__info"
          minLength="2"
          maxLength="40"
          required=""
        />
        <input
          id="password"
          type="password"
          name="password"
          value={formValue.password || ""}
          onChange={handleChange}
          placeholder="Пароль"
          className="register__info"
          minLength="6"
          maxLength="40"
          required=""
        />
      </div>
      <button className="register__save" type="submit">
        Войти
      </button>
    </form>
    <div className="register__signin">
      <p className="register__signin-text">Ещё не зарегистрированы?</p>
      <Link to="/signup" className="register__signin-link">
        Регистрация
      </Link>
    </div>
  </div>
);
}
export default Login;
