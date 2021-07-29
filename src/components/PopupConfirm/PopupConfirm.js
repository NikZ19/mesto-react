import { PopupWithForm } from "../PopupWithForm/PopupWithForm";

export function PopupConfirm({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name='confirm'
      title='Вы уверены?'
      buttonTitle='Да'
      isOpen={isOpen}
      onClose={onClose} />
  )
}
