import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");

  React.useEffect(() => {
    if (props.isOpen) {
      setCardName("");
      setCardLink("");
    }
  }, [props.isOpen]);

  function handleCardNameChange(e) {
    setCardName(e.target.value);
  }

  function handleCardLinkChange(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace(
      {
        name: cardName,
        link: cardLink,
      });
  }

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      btnText={props.isLoading? 'Сохранение...' : 'Создать'}
    >
      <div className="popup__input">
        <input
          id="card-name-input"
          onChange={handleCardNameChange}
          value={cardName}
          type="text"
          name="name"
          placeholder="Название"
          className="popup__info popup__info_input_card-name"
          minLength="2"
          maxLength="30"
          required=""
        />
        <span className="card-name-input-error popup__info-error">
          Необходимо напистаь название карточки
        </span>
      </div>
      <div className="popup__input">
        <input
          id="card-link-input"
          onChange={handleCardLinkChange}
          value={cardLink}
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__info popup__info_input_card-link"
          required=""
        />
        <span className="card-link-input-error popup__info-error">
          Необходимо ввести ссылку на фото
        </span>
      </div>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
