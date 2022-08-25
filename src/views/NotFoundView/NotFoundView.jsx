import notFound from '../../icons/square_вектор-08.jpg';
import { NotFoundBlock } from './NotFoundView.styled';

const NotFoundView = () => {
  return (
    <NotFoundBlock>
      <h1>404 Page not found! :( </h1>
      <img src={notFound} alt="Not Found" />
    </NotFoundBlock>
  );
};
export default NotFoundView;
