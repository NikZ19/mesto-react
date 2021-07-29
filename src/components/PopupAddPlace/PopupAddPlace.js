import { PopupWithForm } from '../PopupWithForm/PopupWithForm.js';

export function PopupAddPlace({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name='add'
      title='Новое место'
      buttonTitle='Сохранить'
      isOpen={isOpen}
      onClose={onClose}>

      <input className="popup__input" name="input_title" id="input-title" type="text" placeholder="Название" required
        minLength="2" maxLength="30" />
      <span className="popup__error" id="input-title-error"></span>
      <input className="popup__input" name="input_link" id="input-link" type="url" placeholder="Ссылка на картинку"
        required />
      <span className="popup__error" id="input-link-error"></span>
    </PopupWithForm>
  )
}
