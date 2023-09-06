import { POPUP_ACTIVE_CLASSNAME, formElementProfile, imgPopup, imgPopupImg, imgPopupTitle } from "./constants.js";
import { closePopupByPressOnEsc, closePopupByClickOnOverlay } from "./index.js";




class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;

    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__text').textContent = this._name;
        this._element.querySelector('.element__img').src = this._link;
        this._registerEventListeners()
        return this._element;
    }

    _registerEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._like()
        });
        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._delete();
        })
        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._popupOpen(imgPopup, POPUP_ACTIVE_CLASSNAME);
        });
    }

    _like() {
        this._element.querySelector('.element__like').classList.toggle('element__like-active');
    }
    _delete() {
        this._element.remove();
    }

    _popupOpen(popups, activeClassName) {
        imgPopupImg.src = this._link;
        imgPopupImg.alt = this._link;
        imgPopupTitle.textContent = this._name;
        popups.classList.add(activeClassName);
        window.addEventListener('mousedown', closePopupByClickOnOverlay);
        window.addEventListener('keydown', closePopupByPressOnEsc);
    }


}

export default Card;