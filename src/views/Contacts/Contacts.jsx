import { useState } from 'react';

import InputForm from 'components/InputForm';
import SearchFilter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';
import { ReactComponent as Add } from 'icons/add.svg';

import { ContactTitle, BoxContacts, AddContactButton } from './Contacts.styled';

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <BoxContacts>
      {showModal && (
        <Modal onClose={toggleModal}>
          <InputForm onClose={toggleModal} />
        </Modal>
      )}

      <ContactTitle>My Contacts</ContactTitle>
      <AddContactButton type="button" onClick={toggleModal}>
        ADD CONTACT
        <Add widths="40px" height="40px" />
      </AddContactButton>
      <SearchFilter />

      <ContactList />
    </BoxContacts>
  );
}
