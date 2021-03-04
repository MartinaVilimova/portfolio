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

	h1, h2, h3, h4, h6, p {
    margin: 0;
  }

  h5 {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    margin: 0;
  }
`
