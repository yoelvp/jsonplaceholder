import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  html {
    font-family: Helvetica, Arial, sans-serif;
  }

  input {
    font-size: inherit;
  }

  @font-face {
    font-family: 'Foo';
    src: url('/path/to/foo.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }
`
