import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
	body {
		margin: 0;
    padding: 0;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.text.primary};
		background-color: ${({ theme }) => theme.bg.primary};
	}

	h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a, button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    outline: none;
    background-color: transparent;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`
