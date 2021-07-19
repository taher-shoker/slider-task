import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    * {
    font-family: 'Open Sans', sans-serif;
    }

    body {
      background-color: #13181D;
      margin: 0;
      padding:0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    button:focus{
      border:unset;
      outline: none;
    }



    .no-list-style {
      list-style-type:none;
    }

    .cursor-pointer{
      cursor: pointer;
    }
`;
