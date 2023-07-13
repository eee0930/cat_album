import { styled } from 'styled-components';

export const ModalConatainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  > div {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 90vw;
  height: auto;
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Error = styled(Img)`
  height: 400px;
  margin: 10px auto;
`;
