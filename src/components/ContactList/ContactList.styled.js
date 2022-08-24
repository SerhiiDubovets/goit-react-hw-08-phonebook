import styled from 'styled-components';
import bookImg from '../../icons/pngwing.com.png';

export const BlockContact = styled.div`
  /* background-color: #ffffff4f; */
  /* border: solid 5px #646eab; */
  padding: 33px;
  min-height: 600px;
  text-align: center;

  background-image: url(${bookImg});
  /* background-size: cover; */
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const List = styled.ul`
  padding-top: 30px;
`;
export const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;
