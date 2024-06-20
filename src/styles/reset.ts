import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
 html,
 body {
   padding: 0;
   margin: 0;
   background-color:  #f6f6f0;
 }

 a {
   color: inherit;
   text-decoration: none;
 }


 * {
   box-sizing: border-box;
 }
`;

export default ResetStyles;
