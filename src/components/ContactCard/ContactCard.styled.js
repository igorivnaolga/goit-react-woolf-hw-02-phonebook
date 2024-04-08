import styled from 'styled-components';

export const Item = styled.li`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  color: #000;
`;

export const Btn = styled.button`
  width: 60px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0 1px 7px grey;
  background-color: #000;
  color: #fff;
  &:hover {
    color: #000;
    background-color: #fff;
    cursor: pointer;
  }
`;
