import styled from 'styled-components';

export const BoxContacts = styled.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  padding: 40px;
`;
export const PhonebookTitle = styled.h1`
  margin-bottom: 10px;
  text-align: center;
  color: #04449d;
  font-size: 43px;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  color: #04449d;
  font-size: 43px;
`;

export const AddContactButton = styled.button`
  width: 250px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: auto;
  background-color: #1976d2;
  /* background-color: #8073b3; */
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    box-shadow: rgb(39 37 37) -2px 3px 4px;
    background-color: #2966a2;
    color: #ffffff;
  }
`;
