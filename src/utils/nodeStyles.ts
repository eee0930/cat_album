import { styled } from 'styled-components';

export const NodeList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const NodeEle = styled.div`
  width: 85px;
  min-height: 85px;
  padding: 8px;
  margin: 2px;
  text-align: center;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 64px;
  }
  @media (min-width: 768px) {
    width: 130px;
    min-height: 130px;
    padding: 12px;
    margin: 8px;
  }
  @media (min-width: 1200px) {
    width: 140px;
    min-height: 140px;
  }
`;
export const Prev = styled(NodeEle)`
  width: 60px;
  img {
    width: 30px;
    margin: 20px 0;
  }
  @media (min-width: 768px) {
    width: 90px;
  }
  @media (min-width: 1200px) {
    width: 100px;
  }
`;
