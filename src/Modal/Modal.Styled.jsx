import styled from 'styled-components';

import { IoCloseOutline } from 'react-icons/io5';

export const CloseBtn = styled(IoCloseOutline)`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const Heder = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;
export const ModalImg = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;
`;
export const AccentText = styled.span`
  color: rgba(52, 112, 255, 1);
`;
export const TextBlock = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:last-child {
    margin-bottom: 14px;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
`;
export const DescriptionHeder = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;
export const Condition = styled.div`
  margin-bottom: 24px;
`;
export const ConditionBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const ConditionItem = styled.li`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  padding: 7px 14px;
  border-radius: 35px;
  background: rgba(249, 249, 249, 1);
`;
export const ConditionValue = styled.span`
  color: rgba(52, 112, 255, 1);
`;
export const PhoneBtn = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: white;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: rgba(52, 112, 255, 1);
  cursor: pointer;

  &:hover {
    background: rgba(11, 68, 205, 1);
  }
`;
