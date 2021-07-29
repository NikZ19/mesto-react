import '../index.css';
import { Header } from './Header/Header.js';
import { Main } from './Main/Main.js';
import { Footer } from './Footer/Footer.js';
import { EditProfilePopup } from './EditProfilePopup/EditProfilePopup.js';
import { EditAvatarPopup } from './EditAvatarPopup/EditAvatarPopup.js';
import { AddPlacePopup } from './AddPlacePopup/AddPlacePopup.js';
import { ImagePopup } from './ImagePopup/ImagePopup.js';
import { ConfirmPopup } from './ConfirmPopup/ConfirmPopup.js';
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <ConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} />

    </div>
  );
}

export default App;
