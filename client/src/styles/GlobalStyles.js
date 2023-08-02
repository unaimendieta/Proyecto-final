import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color:#FAFAFA;
    overflow-x: hidden;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export { GlobalStyles };
