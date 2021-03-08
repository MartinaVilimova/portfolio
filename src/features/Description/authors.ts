enum NameAuthors {
	MartinaVilimova = 'Martina Vilímová',
	TomasHampl = 'Tomáš Hampl',
	JanaChaloupkova = 'Jana Chaloupková',
	JidraMaca = 'Jindřich Máca',
}

type Authors = {
	name: string
	profession: string
	linkedIn: string
}

export const dataAuthors: Readonly<Authors[]> = [
	//@TODO: to ask if jindra and janča can be mentioned
	{
		name: NameAuthors.MartinaVilimova,
		profession: 'front-end (React)',
		linkedIn: 'https://www.linkedin.com/in/martinavilimova/',
	},
	{
		name: NameAuthors.TomasHampl,
		profession: 'back-end (Node)',
		linkedIn: 'https://www.linkedin.com/in/tomáš-hampl-300b461b9/',
	},
	{
		name: NameAuthors.JanaChaloupkova,
		profession: 'front-end (React, Clojurian)',
		linkedIn: 'https://www.linkedin.com/in/agnes97',
	},
	{
		name: NameAuthors.JidraMaca,
		profession: 'full-stack (functional programming addict)',
		linkedIn: 'https://www.linkedin.com/in/macajind/',
	},
]
