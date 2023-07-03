function InfoTooltip({isOpen, onClose, status}) {
    return (
      <section className={`popup popup_type_success ${isOpen ? `popup_opened` : ""}`}>
        <div className={`popup__container`}>
            <div className={`popup__success ${
            status ? "popup__success_type_ok" : "popup__success_type_fail"}`}></div>
            <p className="popup__success-text">
          {status
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз"}</p>
          <button className="popup__close" type="button" onClick={onClose}/>
        </div>
      </section>
    );
  }
  
  export default InfoTooltip;