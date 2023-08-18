const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save-disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible'
}


const toggleOnSubmitBtn = (submitBtn, inactiveButtonClass) => {
    submitBtn.classList.remove(inactiveButtonClass);

    submitBtn.disabled = false;
}
const toggleOffSubmitBtn = (submitBtn, inactiveButtonClass) => {
    submitBtn.classList.add(inactiveButtonClass);

    submitBtn.disabled = true;
}

const checkInputValidity = (input) => {
    return input.validity.valid;
};

const addInputError = (input, errorMessage, errorInputClassName) => {
    const inputErrorEl = document.querySelector(`.${input.id}-error`)
    input.classList.add(errorInputClassName);
    inputErrorEl.textContent = errorMessage;
}
const removeInputError = (input, errorInputClassName) => {
    const inputErrorEl = document.querySelector(`.${input.id}-error`)
    input.classList.remove(errorInputClassName);
    inputErrorEl.textContent = '';
}


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}


const setEventListeners = (input, inputErrorClass, formInputEls, formSubmitBtnEl, inactiveButtonClass) => {
    input.addEventListener('input', () => {
        if (checkInputValidity(input)) {
            removeInputError(input, inputErrorClass)
        }
        else {
            addInputError(input, input.validationMessage, inputErrorClass);
        }
        if (hasInvalidInput([...formInputEls])) {
            toggleOffSubmitBtn(formSubmitBtnEl, inactiveButtonClass)
        }
        else (
            toggleOnSubmitBtn(formSubmitBtnEl, inactiveButtonClass)
        )
    })

}


const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {

    const formEls = document.querySelectorAll(formSelector);
    formEls.forEach((formEl) => {
        const formInputEls = formEl.querySelectorAll(inputSelector);
        const formSubmitBtnEl = formEl.querySelector(submitButtonSelector);
        formInputEls.forEach(input => setEventListeners(input, inputErrorClass, formInputEls, formSubmitBtnEl, inactiveButtonClass))
        formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
            toggleOffSubmitBtn(formSubmitBtnEl, inactiveButtonClass);
            Array.from(formInputEls).every(input => checkInputValidity(input)) && toggleOnSubmitBtn(formSubmitBtnEl, inactiveButtonClass);
        })
    })

}

enableValidation(validationConfig);