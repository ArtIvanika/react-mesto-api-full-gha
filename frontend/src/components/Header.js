import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import logoVector from "../images/logo-Vector.svg";

export default function Header({userData, signOut}) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logoVector}
        alt="Логотип Mesto Russia"
      />
      <Routes>
        <Route
          path="/signup"
          element={
            <Link to="/signin" className="header__link">
              Вход
            </Link>
          }/>

        <Route
          path="/signin"
          element={
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
          }/>

        <Route
          path="/cards"
          element={
            <div className="header__nav">
              <p className="header__email">{userData}</p>
              <Link to="/signin" className="header__link" onClick={signOut}>
                Выйти
              </Link>
            </div>
          }/>
      </Routes>

    </header>
  );
}
