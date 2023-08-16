const popups = document.querySelectorAll('.popup'); // Основной класс попап.
const popupProfile = document.querySelector('.popup_type_profile'); // Попап редактирования профиля.
const popupCard = document.querySelector('.popup_type_card'); // Попап добавления карточки.
const popupCloseBtns = document.querySelectorAll('.popup__close'); // кнопка закрыть (крест)
const POPUP_ACTIVE_CLASSNAME = 'popup_opened';
const profileName = document.querySelector('.profile__name');  // Имя на сайте.
const jobName = document.querySelector('.profile__job'); // Проффесия на сайте.
const place = document.querySelector('.element__text'); // Название места.
const placeImg = document.querySelector('.element__img'); // Картинка места.
const profileBtn = document.querySelector('.profile__button'); // Кнопка редактирование профиля.
const elementBtn = document.querySelector('.profile__add-button'); // Кнопка добавления карточки.
const formElementProfile = popupProfile.querySelector('.popup__form_profile'); // Форма попапа профиля,
const nameInput = popupProfile.querySelector('#popup__name'); // поле ввода имени,
const jobInput = popupProfile.querySelector('#popup__job'); // поле ввода проффессии,
const cardTemplate = document.querySelector('#template-elements').content.querySelector('.element');
// открыть попап
function openPopup(popups, activeClassName) {
    popups.classList.add(activeClassName)
    window.addEventListener('mousedown', closePopupByClickOnOverlay);
    window.addEventListener('keydown', closePopupByPressOnEsc);
}
// закрыть попап
function closePopup(popups, activeClassName) {
    popups.classList.remove(activeClassName)
    window.removeEventListener('mousedown', closePopupByClickOnOverlay);
    window.removeEventListener('keydown', closePopupByPressOnEsc);
}
// закрытие на кнопку 
popupCloseBtns.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        closePopup(evt.target.closest('.popup'), POPUP_ACTIVE_CLASSNAME)
    })
});
// закрытие на ESC 
function closePopupByPressOnEsc(evt) {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector(`.${POPUP_ACTIVE_CLASSNAME}`)
        closePopup(activePopup, POPUP_ACTIVE_CLASSNAME)
    }
}
// закрытие на ПОЛЕ
function closePopupByClickOnOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target, POPUP_ACTIVE_CLASSNAME);
    }
}
//Попап профиля
profileBtn.addEventListener("click", function () {
    openPopup(popupProfile, POPUP_ACTIVE_CLASSNAME)
    nameInput.value = profileName.textContent;
    jobInput.value = jobName.textContent
});
function safeFormSubmit(evt) { // Название функции handleFormSubmit предлагалось в ПР № 4, сама функция не менялась
    evt.preventDefault();

    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    profileName.textContent = nameValue;
    jobName.textContent = jobValue;
    closePopup(popupProfile, POPUP_ACTIVE_CLASSNAME);
}
formElementProfile.addEventListener('submit', safeFormSubmit);
// Попап места
elementBtn.addEventListener('click', () => {
    openPopup(popupCard, POPUP_ACTIVE_CLASSNAME)
})
// Попап картинки
const imgPopup = document.querySelector('.popup_type_image');
const imgPopupImg = imgPopup.querySelector('.popup__img');
const imgPopupTitle = imgPopup.querySelector('.popup__text');
function makeCardNode({ name, link }) {
    const newCard = cardTemplate.cloneNode(true)
    const newCardTitle = newCard.querySelector('.element__text');
    const newCardImg = newCard.querySelector('.element__img');
    const newCardDeleteBtn = newCard.querySelector('.element__delete');
    const newCardLikeBtn = newCard.querySelector('.element__like');
    newCardTitle.textContent = name;
    newCardImg.src = link;
    newCardImg.alt = name;
    // картинка 
    newCardImg.addEventListener('click', function (evt) {

        imgPopupImg.src = link;
        imgPopupImg.alt = name;
        imgPopupTitle.textContent = name;
        openPopup(imgPopup, POPUP_ACTIVE_CLASSNAME);
    });
    // кнопка удалить
    newCardDeleteBtn.addEventListener('click', function (evt) {
        evt.target.closest('.element').remove();
    });
    // кнопка лайк
    newCardLikeBtn.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like-active');
    });
    return newCard
};
// Секция Elements
const sectionElement = document.querySelector('.elements'); // секция елементс
const popupAddPlaceFormEl = document.querySelector('.popup__form_card');
function toggleSubmitPlaceForm(evt) {
    evt.preventDefault();

    const placeNameInput = evt.target.place;
    const imgUrlInput = evt.target.image;

    if (!placeNameInput.value || !imgUrlInput.value) {
        alert('вы не заполнили одно из полей');
        return;
    }
    const cardInfo = {
        name: placeNameInput.value,
        link: imgUrlInput.value
    }
    const newCard = makeCardNode(cardInfo);
    sectionElement.prepend(newCard);
    evt.target.reset()
    closePopup(popupCard, POPUP_ACTIVE_CLASSNAME)
};
popupAddPlaceFormEl.addEventListener('submit', toggleSubmitPlaceForm)
initialCards.forEach(function (item) {
    sectionElement.append(makeCardNode(item));
});