import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`body {
  margin: 0;
  font-family: KodeMone
 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

li{
  list-style:none;
}

img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit:cover;
}
ul{
    list-style:none;
    margin: 0;
    padding: 0;
    
  
}
h1,p,h2{
  margin:0;
}
h3{
  margin:0;
display:inline-block;
}
`;
