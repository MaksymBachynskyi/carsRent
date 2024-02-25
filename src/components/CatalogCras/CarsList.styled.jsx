import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-left:110px;l
`;

export const LoadButton = styled.button`
  display: block;
  margin: 100px auto;
  padding: 20px 70px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border: none;
  background: none;
  color: rgba(52, 112, 255, 1);

  cursor: pointer;
  &:hover {
    color: rgba(11, 68, 205, 1);
  }
`;
