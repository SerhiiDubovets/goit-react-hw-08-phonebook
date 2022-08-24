import { NotFoundBlock, Text } from './NotFoundContacts.styled';
// import notFound from '../../icons/square_вектор-08.jpg';

const NotFound = () => {
  return (
    <NotFoundBlock>
      <Text>Контактов не найденo :(</Text>
      {/* <img src={notFound} alt="Not Found" /> */}
    </NotFoundBlock>
  );
};

export default NotFound;
