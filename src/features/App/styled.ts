import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	body {
		box-sizing: border-box;
		margin: 0;
        padding: 0;
		font-family: 'Poppins', sans-serif;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.text.primary};
		background-color: ${({ theme }) => theme.bg.primary};
	}

	h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
  }
`
