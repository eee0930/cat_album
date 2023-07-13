import { styled } from 'styled-components';

export const BreadCrumb = styled.div`
  height: 62px;
  padding: 16px;
  border-bottom: 4px solid ${(props) => props.theme.borderColor};
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) {
    border-bottom-width: 5px;
  }
  @media (min-width: 1200px) {
    border-bottom-width: 6px;
  }
`;

export const BreadEle = styled.div`
  padding: 4px;
  font-weight: 600;
  text-transform: uppercase;
  &::after {
    content: ' -';
  }
  &:last-child::after {
    content: '';
  }
`;
