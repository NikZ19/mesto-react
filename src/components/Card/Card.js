export function Card({ card, onCardClick, onDeleteCard }) {

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <li className="places__item">
      <img className="places__photo" onClick={handleClick} src={card.link} alt={card.name} />
      <button className="places__trash" onClick={onDeleteCard} type="button" aria-label="Кнопка удалить"></button>
      <div className="places__info">
        <h2 className="places__title">{card.name}</h2>
        <div className="place__like-wrapper">
          <button className="places__like" type="button" aria-label="Лайк"></button>
          <span className="place__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}
