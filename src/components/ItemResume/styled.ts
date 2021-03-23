import styled from 'styled-components'

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 10% 90%;
	grid-template-rows: 3rem 2.2rem auto;
	width: 90%;
	align-items: center;
	margin: 0.5rem 0;
`

export const Animation = styled.div`
	display: flex;
	grid-row: 1 / 4;
	width: 100%;
	height: 100%;
	justify-content: center;
	position: relative;
`
