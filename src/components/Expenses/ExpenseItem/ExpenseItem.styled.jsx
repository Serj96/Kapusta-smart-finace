import styled from '@emotion/styled';
import { myTheme } from 'components/Theme/Theme';
import { ImBin } from 'react-icons/im';

export const ExpItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid ${myTheme.backgroundColors.secondary};
`;

export const ExpDesription = styled.p`
  margin-bottom: 3px;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${myTheme.colors.primary};
`;

export const ExpDate = styled.span`
  font-size: 8px;
  line-height: 1.12;
  letter-spacing: 0.04em;
  color: ${myTheme.colors.primary};
`;

export const ExpSum = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: #e7192e;
`;

export const IncSum = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  color: #407946;
`;

export const ExpButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const DeleteIcon = styled(ImBin)`
  width: 18px;
  height: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ff1616da;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
