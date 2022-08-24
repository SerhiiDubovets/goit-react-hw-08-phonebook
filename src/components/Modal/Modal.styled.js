import styled from 'styled-components';

export const BlokModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;
export const Modals = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  min-height: 250px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
`;
export const CloseBtn = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1976d2;
  color: #ffffff;
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    box-shadow: rgb(39 37 37) -2px 3px 4px;
    background-color: #2966a2;
  }
`;
