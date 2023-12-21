import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`

body{
    width: 100%;
    max-width: 100vw;
}

#root{
    width: 100%;
    max-width: 100vw;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
}
`
