import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export const Arrow = styled(IoIosArrowDown)`
  width: 18px;
  height: 18px;
  fill: black;
  position: absolute;
  top: 0;
  display: inline-block;
  cursor: pointer;
  top: 30%;
  right: 14px;
`;
export const ArrowUp = styled(IoIosArrowUp)`
  width: 18px;
  height: 18px;
  fill: black;
  position: absolute;
  top: 0;
  display: inline-block;
  cursor: pointer;
  top: 30%;
  right: 14px;
`;

export const ListToSearch = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 224px;
  height: 271px;
  z-index: 800;
  overflow: auto;
  scrollbar-width: 8px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background: rgba(255, 255, 255, 1);
  color: rgba(18, 20, 23, 0.2);
  margin-top: 4px;
`;
export const ListPrice = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 125px;
  height: 188pxpx;
  z-index: 800;
  overflow: auto;
  scrollbar-width: 8px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  background: rgba(255, 255, 255, 1);
  color: rgba(18, 20, 23, 0.2);
  margin-top: 4px;
`;
export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 18px;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const Headers = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  margin-bottom: 8px;
  color: rgba(138, 138, 137, 1);
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  height: 48px;
  color: rgba(255, 255, 255, 1);
  padding: 14px 44px;
  border-radius: 12px;
  border: none;
  background-color: rgba(52, 112, 255, 1);
  cursor: pointer;
  &:hover {
    background-color: rgba(11, 68, 205, 1);
  }
`;
export const InputLeft = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 18px;
  width: 125px;
  height: 48px;
  border: none;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  border-right: 0.08rem solid rgba(138, 138, 137, 1);

  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
export const InputRigth = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-left: 18px;
  width: 125px;
  height: 48px;
  border: none;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;
