import '../index.css';
import { Header } from './Header/Header.js';
import { Main } from './Main/Main.js';
import { Footer } from './Footer/Footer.js';
import { PopupEditProfile } from './PopupEditProfile/PopupEditProfile.js';
import { PopupEditAvatar } from './PopupEditAvatar/PopupEditAvatar.js';
import { PopupAddPlace } from './PopupAddPlace/PopupAddPlace.js';
import { PopupImage } from './PopupImage/PopupImage.js';
import { PopupConfirm } from './PopupConfirm/PopupConfirm.js';
import React from 'react';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleTrashClick = () => {
    setIsConfirmPopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ name: card.name, link: card.link })
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({})
  };

  return (
    <div className="root">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onDeleteCard={handleTrashClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <PopupImage card={selectedCard} onClose={closeAllPopups} />
      <PopupConfirm isOpen={isConfirmPopupOpen} onClose={closeAllPopups} />

    </div>
  );
}

export default App;
