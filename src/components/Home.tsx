import { styled } from 'styled-components';
import BreadCrumbs from './BreadCrumbs';
import Nodes from './Nodes';

const Title = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  text-shadow: 2px 2px 0px #ff4545, -2px -2px 0px #3fe9ff;
`;
export const Container = styled.div`
  border: 4px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 5px;
  width: 95vw;
  height: 80vh;
  @media (min-width: 768px) {
    border-width: 5px;
    border-radius: 6px;
    width: 85vw;
    height: 600px;
  }
  @media (min-width: 1200px) {
    border-width: 6px;
    border-radius: 8px;
    width: 800px;
    height: 600px;
  }
`;
function Home() {
  return (
    <>
      <Title>MeowMeow Album</Title>
      <Container>
        <BreadCrumbs />
        <Nodes />
      </Container>
    </>
  );
}

export default Home;
