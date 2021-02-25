import styled from 'styled-components'

export const Wrapper = styled.section<{ open: boolean }>`
	display: none;

	@media (max-width: 50em) {
		display: flex;
		height: 4em;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;

		& > div {
			width: 1.8em;
			height: 0.15em;
			margin: 0.2em;
			background-color: ${({ theme }) => theme.text.primary};
			border-radius: 1em;
			transform-origin: 1px;
			transition: all 0.4s ease;

			&:nth-child(1) {
				transform: ${({ open }) =>
					open ? 'rotate(41deg)' : 'rotate(0)'};
				background-color: ${({ open }) =>
					open
						? ({ theme }) => theme.text.colorful
						: ({ theme }) => theme.text.primary};
			}

			&:nth-child(2) {
				opacity: ${({ open }) => (open ? '0' : '1')};
			}

			&:nth-child(3) {
				transform: ${({ open }) =>
					open ? 'rotate(-41deg)' : 'rotate(0)'};
				background-color: ${({ open }) =>
					open
						? ({ theme }) => theme.text.colorful
						: ({ theme }) => theme.text.primary};
			}
		}
	}
`
