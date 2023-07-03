import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="author"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      btnText={props.isLoading? 'Сохранение...' : 'Сохранить'}
    >
      <div className="popup__input">
        <input
          id="author-name-input"
          type="text"
          value={name || ''}
          onChange={handleNameChange}
          name="name"
          placeholder="Имя"
          className="popup__info popup__info_input_name"
          minLength="2"
          maxLength="40"
          required=""
        />
        <span className="author-name-input-error popup__info-error">
          Необходимо написать ваше имя
        </span>
      </div>
      <div className="popup__input">
        <input
          id="job-author-input"
          type="text"
          value={description || ''}
          onChange={handleDescriptionChange}
          name="about"
          placeholder="Вид деятельности"
          className="popup__info popup__info_input_job"
          minLength="2"
          maxLength="200"
          required=""
        />
        <span className="job-author-input-error popup__info-error">
          Необходимо написать вид вашей деятельности
        </span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
