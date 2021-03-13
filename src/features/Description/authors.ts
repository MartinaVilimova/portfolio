export enum NameAuthors {
	MartinaVilimova = 'Martina Vilímová',
	TomasHampl = 'Tomáš Hampl',
	JanaChaloupkova = 'Jana Chaloupková',
	JidraMaca = 'Jindřich Máca',
}

export type AuthorDetail = {
	name: string
	profession: string
	linkedIn: string
}

export const dataAuthors: Record<NameAuthors, AuthorDetail> = {
	//@TODO: to ask if jindra and janča can be mentioned

	[NameAuthors.MartinaVilimova]: {
		name: NameAuthors.MartinaVilimova,
		profession: 'front-end (React)',
		linkedIn: 'https://www.linkedin.com/in/martinavilimova/',
	},
	[NameAuthors.TomasHampl]: {
		name: NameAuthors.TomasHampl,
		profession: 'back-end (Node)',
		linkedIn: 'https://www.linkedin.com/in/tomáš-hampl-300b461b9/',
	},
	[NameAuthors.JanaChaloupkova]: {
		name: NameAuthors.JanaChaloupkova,
		profession: 'front-end (React, Clojurian)',
		linkedIn: 'https://www.linkedin.com/in/agnes97',
	},
	[NameAuthors.JidraMaca]: {
		name: NameAuthors.JidraMaca,
		profession: 'full-stack (functional programming addict)',
		linkedIn: 'https://www.linkedin.com/in/macajind/',
	},
}
