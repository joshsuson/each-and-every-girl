import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
   
   :root {
        --white: #ffffff;
        --black: ##333333;
        --primary-color: #f27c68;
        --secondary-color: #c57c52;
        --accent-color: #f2d4b8;

    }

    #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }


    * {
        box-sizing: border-box;
    }
    
    html {
        font-size: 8px;
        background-color: var(--white);
        color: var(--black);
        height: 100%;
    }

    body {
        height: 100%
    }    
`

export default GlobalStyles
