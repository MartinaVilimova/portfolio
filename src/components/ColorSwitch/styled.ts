import styled from 'styled-components'

export const Wrapper = styled.div`
	cursor: pointer;
	height: 1.5em;
	width: 1.5em;
	background: radial-gradient(
		circle at 10px 10px,
		${({ theme }) => theme.text.colorful},
		${({ theme }) => theme.bg.shadowBlack}
	);
	box-shadow: 0.1em 0.1em 0.1em ${({ theme }) => theme.bg.shadowBlack},
		-0.1em -0.1em 0.1em ${({ theme }) => theme.bg.shadowWhite};
	border-radius: 50%;
`
