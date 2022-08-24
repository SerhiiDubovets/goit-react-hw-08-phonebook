import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
margin: 0;
    color: rgba(0, 0, 0, 0.87);
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
    background-color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  list-style: none;
  
}

`;
