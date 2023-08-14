const toggleOnSubmitBtn = (submitBtn, inactiveButtonClass) => {
    submitBtn.classList.remove(inactiveButtonClass);
    submitBtn.disabled = false;
}
const toggleOffSubmitBtn = (submitBtn, inactiveButtonClass) => {
    submitBtn.classList.add(inactiveButtonClass);
    submitBtn.disabled = true;
}

const checkInputValidity = (input) => {
    if (!input.validity.valid) {
        addInputError(input, input.validationMessage);
        return false;
    } else {
        removeInputError(input)
        return true;
    }
};

const addInputError = (input, errorMessage) => {
    input.classList.add('popup__input_invalid');
    document.querySelector(`.${input.id}_error`).textContent = errorMessage;
}
const removeInputError = (input) => {
    input.classList.remove('popup__input_invalid');
    document.querySelector(`.${input.id}_error`).textContent = '';
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}


const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const formEl = document.querySelector(formSelector);
    const formInputEls = formEl.querySelectorAll(inputSelector);
    const formSubmitBtnEl = formEl.querySelector(submitButtonSelector);
    formInputEls.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input);
            if (hasInvalidInput([...formInputEls])) {
                toggleOffSubmitBtn(formSubmitBtnEl, inactiveButtonClass)
            }
            else (
                toggleOnSubmitBtn(formSubmitBtnEl, inactiveButtonClass)
            )
        })
    })
    formEl.addEventListener('submit', (evt) => {
        evt.preventDefault();
    })
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save-disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});

enableValidation({
    formSelector: '.popup__form_card',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save-disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});