import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__ava">
            <img
              className="profile__foto"
              src={currentUser.avatar}
            // style={{ backgroundImage: `url(${userAvatar})` }} 
              alt="Фото профиля"
            />
            <button
              className="profile__foto-btn"
              type="button"
              onClick={props.onEditAvatar}
              />
          </div>
          <div className="profile__text">
            <div className="profile__text-first">
              <h1 className="profile__text-title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              />
            </div>
            <p className="profile__text-subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="button-add"
          type="button"
          onClick={props.onAddPlace}
          />
      </section>

      <section className="card">
        <ul className="card__list">
        {props.cards.map(card => (<Card key={card._id} card={card} onCardClick={props.onCardClick} onCardDeletePopup={props.onCardDeletePopup} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>))}
        </ul>
      </section>
    </main>
  );
}
