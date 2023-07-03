import React from "react";

function ImagePopup ({card, onClose}){
    return (
        <section className={`popup popup_type_image ${card.isOpen ? `popup_opened` : ""}`}>
          <div className="popup__image-box">
            <figure className="popup__image-container">
              <img className="popup__image-foto" type="url" src={card.item.link} alt={card.item.name}/>
              <figcaption className="popup__image-sign" type="text">{card.item.name}</figcaption>
            </figure>
            <button className="popup__close" type="button" onClick={onClose}/>
          </div>
        </section>
    )
}

export default ImagePopup;