import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  a {
    cursor: pointer !important;
    outline: none;
    color: inherit;
    text-decoration: none;
  }
  button { cursor: pointer; }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 400;
    font-family: 'Poppins', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.bgColor};
  }
`;
