import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardDeletePopup, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick({
      isOpen: true,
      item: card,
    });
  };
  const handleLikeClick = () => {
    onCardLike(card)
  }

  const handleDeleteClick = ()  => {
    onCardDelete(card)
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__heart ${
    isLiked && "card__heart_active"
  }`;

  return (
    <li className="card__item">
      {isOwn && (
        <button className="card__delete" type="button" onClick={handleDeleteClick} />
      )}
      <img
        className="card__foto"
        onClick={handleCardClick}
        src={card.link}
        alt={card.name}
      />
      <div className="card__text">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}/>
          <h3 className="card__like-sum">{card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}
export default Card
