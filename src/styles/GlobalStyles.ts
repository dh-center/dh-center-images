import { createGlobalStyle } from 'styled-components';

/**
 * Global CSS styles for application
 */
const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;