import { PopupWithForm } from '../PopupWithForm/PopupWithForm.js';

export function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name='edit'
      title='Редактировать профиль'
      buttonTitle='Сохранить'
      isOpen={isOpen}
      onClose={onClose}>

      <input className="popup__input" name="input_name" id="input-name" type="text" placeholder="Имя" required
        minLength="2" maxLength="40" />
      <span className="popup__error" id="input-name-error"></span>
      <input className="popup__input" name="input_about" id="input-about" type="text" placeholder="Вид деятельности"
        required minLength="2" maxLength="200" />
      <span className="popup__error" id="input-about-error"></span>

    </PopupWithForm>
  )
}
