import React from "react";
import { api } from '../../utils/Api.js'
import { Card } from "../Card/Card.js";


export function Main({ onEditProfile, onEditAvatar, onAddPlace, onDeleteCard, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialProfile()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => setCards(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="content root__container">
      <section className="profile">
        <div className="profile__info">
          <button className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} type="button" aria-label="Кнопка редактирования аватара"></button>
          <div className="profile__text">
            <div className="profile__name-wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-btn" onClick={onEditProfile} type="button" aria-label="Кнопка редактирования профиля"></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-btn" onClick={onAddPlace} type="submit" aria-label="Кнопка добавления новой карточки"></button>
      </section>
      <section className="places">
        <ul className="places__items">
          {cards.map(card => <Card key={card._id} card={card} onCardClick={onCardClick} onDeleteCard={onDeleteCard} />)}
        </ul>
      </section>
    </main>
  )
}
