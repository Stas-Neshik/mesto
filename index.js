const popup = document.querySelector('.popup');
let profile = document.querySelector('.profile__info');




// Находим форму в DOM
let formElement = document.querySelector('.popup__container');// Воспользуйтесь методом querySelector()

let Name = profile.querySelector('.profile__name');
let proffesion = profile.querySelector('.profile__job')
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-proffesion');


function handleFormSubmit(evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    let NameValue = nameInput.value;
    let JobValue = jobInput.value;

    Name.textContent = NameValue;
    proffesion.textContent = JobValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);








// открытие и закрытие попапа


const popupOpenBut = document.querySelector('.profile__button_open');
popupOpenBut.addEventListener("click", function () {
    popup.classList.toggle('popup__open');
});
const popupCloseBut = document.querySelector('.popup__close');
popupCloseBut.addEventListener("click", function () {
    popup.classList.toggle('popup__open');
});

const popupSave = document.querySelector('.popup__save');
popupSave.addEventListener("click", function () {
    popup.classList.toggle('popup__open');
});

// лайк закрашивается
const like = document.querySelector('.element__like');
like.addEventListener("click", function () {
    like.classList.toggle('element__like_active');
    console.log('hello');
})



