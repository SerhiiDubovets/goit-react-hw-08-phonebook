import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contactApi';
import { getFilter } from 'redux/Contacts/slice';

import ContactItem from 'components/ContactItem';
import NotFound from 'components/NotFoundContacts';
import Loader from 'components/Loader';

import { BlockContact, List } from './ContactList.styled';

const ContactList = () => {
  const value = useSelector(getFilter);
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const filterCont = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const contact = filterCont();

  return (
    <BlockContact>
      {isFetching ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <List>
          {contact.length === 0 ? (
            <NotFound />
          ) : (
            contact.map(({ id, name, number }) => (
              <ContactItem key={id} name={name} number={number} id={id} />
            ))
          )}
        </List>
      ) : (
        <NotFound />
      )}
    </BlockContact>
  );
};

export default ContactList;
