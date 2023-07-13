
let profile = document.querySelector('.profile__info');
let name = profile.querySelector('.profile__name');
let proffesion = profile.querySelector('.profile__job')
const popupOpenBut = document.querySelector('.profile__button');

// Находим форму в DOM

const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');// Воспользуйтесь методом querySelector()
let nameInput = document.querySelector('#popup__input_name');
let jobInput = document.querySelector('#popup__input_job');

function handleFormSubmit(evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;

    name.textContent = nameValue;
    proffesion.textContent = jobValue;
    popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

// открытие и закрытие попапа

popupOpenBut.addEventListener("click", function () {
    popup.classList.toggle('popup_opened');

    nameInput.value = name.textContent;
    jobInput.value = proffesion.textContent
});

const popupCloseBut = document.querySelector('.popup__close');
popupCloseBut.addEventListener("click", popupClose);


function popupClose() {
    popup.classList.remove('popup_opened');
}

// // лайк закрашивается
// const like = document.querySelector('.element__like');
// like.addEventListener("click", function () {
//     like.classList.toggle('element__like_active');
//     console.log('hello');
// })