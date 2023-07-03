function PopupWithForm({isOpen, onClose, onSubmit, name, title, children, btnText}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ""}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <h2 className={`popup__name popup__name_type_${name}`}>
          {title}
        </h2>
        <form className={`popup__form popup__form_type_${name}`} onSubmit={onSubmit}>
          {children} 
          <button className={`popup__save popup__save_type_${name}`} type="submit" >
            {btnText}
          </button>
        </form>
        <button className="popup__close" type="button" onClick={onClose}/>
      </div>
    </section>
  );
}

export default PopupWithForm;
