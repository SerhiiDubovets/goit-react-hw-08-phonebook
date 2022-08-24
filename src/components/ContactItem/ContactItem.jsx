import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactApi';
import toast from 'react-hot-toast';
import Loader from 'components/Loader';
import { ReactComponent as DeleteIcon } from 'icons/delete.svg';
import { Item, NameItem, NumberItem, ButtonItem } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  isDeleting &&
    toast.success(`${name} was removed`, {
      icon: '😞',
      duration: 3000,
    });

  return (
    <Item>
      <NameItem>{name}</NameItem>
      <NumberItem>{number}</NumberItem>
      <ButtonItem
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? (
          <Loader />
        ) : (
          <DeleteIcon
            width="20px"
            height="20px"
            area-aria-label="delete contact"
          />
        )}
      </ButtonItem>
    </Item>
  );
};

export default ContactItem;

ContactItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
