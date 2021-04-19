import styled from 'styled-components'

export const CoverForShadesOfColors = styled.div`
	width: 100%;

	& > div:nth-child(3n + 1) article div:first-child div {
		filter: brightness(90%);
	}
	& > div:nth-child(3n + 2) article div:first-child div {
		filter: brightness(70%);
	}
	& > div:nth-child(3n + 3) article div:first-child div {
		filter: brightness(50%);
	}
`

export const Wrapper = styled.article`
	display: grid;
	grid-template-columns: 10% 90%;
	grid-template-rows: auto auto auto auto;
	width: 90%;
	align-items: center;
	margin: 0.5rem 0;
`

export const Animation = styled.div`
	display: flex;
	grid-row: 1 / 5;
	width: 100%;
	height: 100%;
	justify-content: center;
	position: relative;
`

export const BallScale = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.text.colorful.basicColor};
	top: 2rem;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
`

export const LineY = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.text.colorful.basicColor};
	width: 0.1rem;
	height: 92%;
`
