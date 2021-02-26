const animationItemOpen = (item: number) => `
    &:nth-child(${item + 1}) {
		animation: movedY 1s ease forwards;
		animation-delay: ${item * 0.3}s;
		@keyframes movedY {
				0% {
					opacity: 0;
					transform: translateY(0);
				}
				100% {
					opacity: 1;
					transform: translateY(1em);
				}
			}
    }
`

export const getAnimationOpen = (): string => {
	let str = ''
	for (let i = 0; i < 5; i += 1) {
		str += animationItemOpen(i)
	}
	return str
}

const animationItemClose = (item: number, delay: number) => `
	&:nth-child(${item - 1}) {
	  animation: movedY 1s ease forwards;
	  animation-delay: ${delay}s;
	  @keyframes movedY {
				0% {
					opacity: 1;
					transform: translateY(0);
				}
				100% {
					opacity: 0;
					transform: translateY(-1em);
				}
			}
	}
`

export const getAnimationClose = (): string => {
	let str = ''
	const delays = [1.8, 1.5, 1.2, 0.9, 0.6, 0.3, 0]
	for (let i = 6; i > 0; i -= 1) {
		str += animationItemClose(i, delays[i])
	}
	return str
}
