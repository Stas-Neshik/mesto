export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save-disabled',
    inputErrorClass: 'popup__input_error'
};

export const popups = document.querySelectorAll('.popup'); // Основной класс попап.
export const popupProfile = document.querySelector('.popup_type_profile'); // Попап редактирования профиля.
export const popupCard = document.querySelector('.popup_type_card'); // Попап добавления карточки.
export const popupCloseBtns = document.querySelectorAll('.popup__close'); // кнопка закрыть (крест)
export const POPUP_ACTIVE_CLASSNAME = 'popup_opened';
export const profileName = document.querySelector('.profile__name');  // Имя на сайте.
export const jobName = document.querySelector('.profile__job'); // Проффесия на сайте.
export const place = document.querySelector('.element__text'); // Название места.
export const placeImg = document.querySelector('.element__img'); // Картинка места.
export const profileBtn = document.querySelector('.profile__button'); // Кнопка редактирование профиля.
export const elementBtn = document.querySelector('.profile__add-button'); // Кнопка добавления карточки.
export const formElementProfile = popupProfile.querySelector('.popup__form_profile'); // Форма попапа профиля,
export const nameInput = popupProfile.querySelector('#popup__name'); // поле ввода имени,
export const jobInput = popupProfile.querySelector('#popup__job'); // поле ввода проффессии,
export const cardTemplate = document.querySelector('#template-elements').content.querySelector('.element');


// Попап картинки
export const imgPopup = document.querySelector('.popup_type_image');
export const imgPopupImg = imgPopup.querySelector('.popup__img');
export const imgPopupTitle = imgPopup.querySelector('.popup__text');

// Секция Elements
export const sectionElement = document.querySelector('.elements');
export const popupAddPlaceFormEl = document.querySelector('.popup__form_card');