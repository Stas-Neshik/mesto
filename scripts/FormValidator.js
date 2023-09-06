class FormValidator {
    constructor({ inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }, formSelector) {
        this.formEl = document.querySelector(formSelector);
        this.formInputEls = this.formEl.querySelectorAll(inputSelector);
        this.formSubmitBtnEl = this.formEl.querySelector(submitButtonSelector);
        this.inputErrorClass = inputErrorClass;
        this.inactiveButtonClass = inactiveButtonClass;
    }

    enableValidation() {
        this.formInputEls.forEach(input => this._setEventListeners(input, this.inputErrorClass, this.formInputEls, this.formSubmitBtnEl, this.inactiveButtonClass))
        this.formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._toggleOffSubmitBtn(this.formSubmitBtnEl, this.inactiveButtonClass);
            Array.from(this.formInputEls).every(input => this._checkInputValidity(input)) && this._toggleOnSubmitBtn(this.formSubmitBtnEl, this.inactiveButtonClass);
        })
    }

    _checkInputValidity(input) {
        return input.validity.valid;
    }
    _removeInputError(input, errorInputClassName) {
        const inputErrorEl = document.querySelector(`.${input.id}-error`)
        input.classList.remove(errorInputClassName);
        inputErrorEl.textContent = '';
    }

    _addInputError(input, errorMessage, errorInputClassName) {
        const inputErrorEl = document.querySelector(`.${input.id}-error`)
        input.classList.add(errorInputClassName);
        inputErrorEl.textContent = errorMessage;
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleOffSubmitBtn(submitBtn, inactiveButtonClass) {
        submitBtn.classList.add(inactiveButtonClass);

        submitBtn.disabled = true;
    }

    _toggleOnSubmitBtn(submitBtn, inactiveButtonClass) {
        submitBtn.classList.remove(inactiveButtonClass);

        submitBtn.disabled = false;
    }

    _setEventListeners(input, inputErrorClass, formInputEls, formSubmitBtnEl, inactiveButtonClass) {
        input.addEventListener('input', () => {
            if (this._checkInputValidity(input)) {
                this._removeInputError(input, inputErrorClass)
            }
            else {
                this._addInputError(input, input.validationMessage, inputErrorClass);
            }
            if (this._hasInvalidInput([...formInputEls])) {
                this._toggleOffSubmitBtn(formSubmitBtnEl, inactiveButtonClass)
            }
            else (
                this._toggleOnSubmitBtn(formSubmitBtnEl, inactiveButtonClass)
            )
        })
    }

}
export default FormValidator;