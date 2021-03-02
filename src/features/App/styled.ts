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
    font-size: 2.5rem;
    margin: 0;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    margin: 0;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.75rem;
    margin: 0;
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    margin: 0;
  }

  h5 {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    margin: 0;
  }
`
