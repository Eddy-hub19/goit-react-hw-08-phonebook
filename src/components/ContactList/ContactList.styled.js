import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

// ContactList

export const List = styled.ul`
  padding: 0;
  width: 100%;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;

  :hover {
    background: #666f6e;
    box-shadow: 1px 1px 1px 1px;
    transition: background 1.3s ease;
    color: white;
  }
`;

export const ContactBtn = styled(IconButton)`
  display: block;
  margin-left: auto;
  width: auto;
  height: 25px;
  font-size: 13px;
  cursor: pointer;
  :hover {
    background: #d50a0af0;
    color: red;
    transition: background 1s ease;
  }
`;

export const Name = styled.p`
  padding: 5px;
`;

export const Number = styled.span`
  margin-left: 7px;
  margin-right: 8px;
`;
