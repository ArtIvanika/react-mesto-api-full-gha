import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({avatar: avatarRef.current.value});
  }

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="ava"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      btnText={props.isLoading? 'Сохранение...' : 'Сохранить'}
    >
      <div className="popup__input">
        <input
          ref={avatarRef}
          id="ava-link-input"
          type="url"
          name="avatar"
          placeholder="https://somewebsite.com/someimage.jpg"
          className="popup__info popup__info_input_ava-link"
          required=""
        />
        <span className="ava-link-input-error popup__info-error">
          Необходимо ввести ссылку на фото
        </span>
      </div>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
