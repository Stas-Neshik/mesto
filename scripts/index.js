import Card from "./Card.js";
import initialCards from "./initialCards.js";
import { popupProfile, popupCard, popupCloseBtns, POPUP_ACTIVE_CLASSNAME, profileName, jobName, profileBtn, elementBtn, formElementProfile, nameInput, jobInput, popupAddPlaceFormEl, validationConfig } from "./constants.js";
import FormValidator from "./FormValidator.js";


initialCards.forEach((item) => {
    const card = new Card(item, '.template');
    const cardElement = card.generateCard();

    // Добавляем в DOM
    document.querySelector('.elements').append(cardElement);
});




// открыть попап
export function openPopup(popups, activeClassName) {
    popups.classList.add(activeClassName)
    window.addEventListener('mousedown', closePopupByClickOnOverlay);
    window.addEventListener('keydown', closePopupByPressOnEsc);
}
// закрыть попап
export function closePopup(popups, activeClassName) {
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
export function closePopupByPressOnEsc(evt) {
    if (evt.key === 'Escape') {
        const activePopup = document.querySelector(`.${POPUP_ACTIVE_CLASSNAME}`)
        closePopup(activePopup, POPUP_ACTIVE_CLASSNAME)
    }
}
// закрытие на ПОЛЕ
export function closePopupByClickOnOverlay(evt) {
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
function safeFormSubmit(evt) {
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

function toggleSubmitPlaceForm(evt) {
    evt.preventDefault();

    const placeNameInput = evt.target.place;
    const imgUrlInput = evt.target.image;

    const cardInfo = {
        name: placeNameInput.value,
        link: imgUrlInput.value
    }
    // Не совсем понял комментарий, можно переформулировать, пожалуйста
    const card = new Card(cardInfo, '.template');
    const cardElement = card.generateCard();

    // Добавляем в DOM
    document.querySelector('.elements').prepend(cardElement);
    evt.target.reset()
    closePopup(popupCard, POPUP_ACTIVE_CLASSNAME)
};

popupAddPlaceFormEl.addEventListener('submit', toggleSubmitPlaceForm)

const proFileFormValidation = new FormValidator(validationConfig, '.popup__form_profile');
const placeFormValidation = new FormValidator(validationConfig, '.popup__form_card');
proFileFormValidation.enableValidation();
placeFormValidation.enableValidation();