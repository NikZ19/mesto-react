import { PopupWithForm } from '../PopupWithForm/PopupWithForm.js';

export function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonTitle='Сохранить'
      isOpen={isOpen}
      onClose={onClose}>

      <input className="popup__input" name="input_link" id="input-link-avatar" type="url" placeholder="Ссылка на картинку"
        required />
      <span className="popup__error" id="input-link-avatar-error"></span>
    </PopupWithForm>
  )
}
