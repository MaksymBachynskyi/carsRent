import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledLink = styled(NavLink)`
  color: blue;
  &:hover {
    color: orange;
  }
`;
