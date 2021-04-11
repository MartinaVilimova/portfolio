import autoodstrejdy from 'assets/autoodstrejdy.png'
import kafickari from 'assets/kafickari.png'
import eaglefitness from 'assets/eaglefitness.png'
import cestovka from 'assets/cestovka.png'
import zdravemlsani from 'assets/zdravemlsani.png'
import kadernictvi from 'assets/kadernictvi.png'
import pokemon from 'assets/pokemon.png'
import {
	AuthorDetail,
	dataAuthors,
	NameAuthors,
} from 'features/Description/authors'

export enum DataFilter {
	cooperation = 'spolupráce',
	ownWork = 'vlastní práce',
}

type DataPicture = {
	src: string
	alt: string
}

export type DataItemsMyWork = {
	myWorkItem: {
		picture: string
		subtitle: string
		webLink?: string
		githubLink?: string
	}
	authors: AuthorDetail[]
	filter: DataFilter
	description: string
	carousel: DataPicture[]
	skills: string
	updateDate: string
}

export const dataMyWork: DataItemsMyWork[] = [
	{
		myWorkItem: {
			picture: pokemon,
			subtitle: 'Aj-tý spojka',
			githubLink: '/',
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
			dataAuthors[NameAuthors.JanaChaloupkova],
			dataAuthors[NameAuthors.JidraMaca],
		],
		filter: DataFilter.cooperation,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: pokemon,
				alt: 'Aj-tý spojka',
			},
		],
		skills: 'React / Styled Component / Firebase ',
		updateDate: 'Stále ve vývoji',
	},
	{
		myWorkItem: {
			picture: pokemon,
			subtitle: 'Osobní portfolio',
			githubLink: '/',
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
		],
		filter: DataFilter.cooperation,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: pokemon,
				alt: 'Osobní portfolio',
			},
		],
		skills: 'React / Styled Component / Firebase - upravit',
		updateDate: 'Duben 2021',
	},
	{
		myWorkItem: {
			picture: pokemon,
			subtitle: 'Pokemon',
			githubLink: '/',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: pokemon,
				alt: 'pokemon',
			},
		],
		skills: 'React',
		updateDate: 'Březen 2021',
	},
	{
		myWorkItem: {
			picture: kafickari,
			subtitle: 'Kafíčkáři',
			webLink: 'http://kafickari.unas.cz/',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: kafickari,
				alt: 'kafíčkáři',
			},
		],
		skills: 'WordPress',
		updateDate: 'Listopad 2020',
	},
	{
		myWorkItem: {
			picture: cestovka,
			subtitle: 'Cestovka, Zdravé mlsání',
			githubLink: '/',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: cestovka,
				alt: 'cestovka',
			},
			{
				src: zdravemlsani,
				alt: 'zdrave mlsani',
			},
		],
		skills: 'Sass / BEM / CssGrid - upravit',
		updateDate: 'Srpen 2020',
	},
	{
		myWorkItem: {
			picture: kadernictvi,
			subtitle: 'Kadeřnictví Scissors',
			githubLink: '/',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: kadernictvi,
				alt: 'kadernictvi',
			},
		],
		skills: 'Boostrap - upravit',
		updateDate: 'Srpen 2020',
	},
	{
		myWorkItem: {
			picture: eaglefitness,
			subtitle: 'Eagle fitness',
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
		],
		filter: DataFilter.ownWork,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: eaglefitness,
				alt: 'eagle fitness',
			},
		],
		skills: 'HTML / CSS / JS',
		updateDate: 'Únor 2020',
	},
	{
		myWorkItem: {
			picture: autoodstrejdy,
			subtitle: 'Auto od strejdy',
			webLink: 'https://www.autoodstrejdy.cz/',
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
		],
		filter: DataFilter.ownWork,
		description:
			'Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Etiam bibendum elit eget erat. Pellentesque pretium lectus id turpis. In dapibus augue non sapien. Etiam bibendum elit eget erat. Fusce nibh. Aliquam erat volutpat. Curabitur vitae diam non enim vestibulum interdum. Quisque tincidunt scelerisque libero. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		carousel: [
			{
				src: autoodstrejdy,
				alt: 'Auto od strejdy',
			},
		],
		skills: 'HTML / CSS',
		updateDate: 'Září 2019',
	},
]
