import { TFunction } from 'react-i18next'
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
	cooperation = 'cooperation',
	ownWork = 'ownWork',
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

export const getDataMyWork = (
	t: TFunction<'translation'>
): DataItemsMyWork[] => [
	{
		myWorkItem: {
			picture: pokemon,
			subtitle: t('myWork.myWork8.title'),
			githubLink: 'https://github.com/out-fox-it/aj-ty-spojka',
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
			dataAuthors[NameAuthors.JanaChaloupkova],
			dataAuthors[NameAuthors.JidraMaca],
		],
		filter: DataFilter.cooperation,
		description: t('myWork.myWork8.description'),
		carousel: [
			{
				src: pokemon,
				alt: t('myWork.myWork8.title'),
			},
		],
		skills: t('myWork.myWork8.skills'),
		updateDate: t('myWork.myWork8.updateDate'),
	},
	{
		myWorkItem: {
			picture: pokemon,
			subtitle: t('myWork.myWork7.title'),
			githubLink: 'https://github.com/MartinaVilimova/portfolio',
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
		],
		filter: DataFilter.cooperation,
		description: t('myWork.myWork7.description'),
		carousel: [
			{
				src: pokemon,
				alt: t('myWork.myWork7.title'),
			},
		],
		skills: t('myWork.myWork7.skills'),
		updateDate: t('myWork.myWork7.updateDate'),
	},
	{
		myWorkItem: {
			picture: pokemon,
			subtitle: t('myWork.myWork6.title'),
			githubLink: 'https://github.com/MartinaVilimova/pokemon',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description: t('myWork.myWork6.description'),
		carousel: [
			{
				src: pokemon,
				alt: t('myWork.myWork6.title'),
			},
		],
		skills: t('myWork.myWork6.skills'),
		updateDate: t('myWork.myWork6.updateDate'),
	},
	{
		myWorkItem: {
			picture: kafickari,
			subtitle: t('myWork.myWork5.title'),
			webLink: 'http://kafickari.unas.cz/',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description: t('myWork.myWork5.description'),
		carousel: [
			{
				src: kafickari,
				alt: t('myWork.myWork5.title'),
			},
		],
		skills: t('myWork.myWork5.skills'),
		updateDate: t('myWork.myWork5.updateDate'),
	},
	{
		myWorkItem: {
			picture: cestovka,
			subtitle: t('myWork.myWork4.title'),
			githubLink: 'https://github.com/MartinaVilimova/cestovka',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description: t('myWork.myWork4.description'),
		carousel: [
			{
				src: cestovka,
				alt: t('myWork.myWork4.title'),
			},
		],
		skills: t('myWork.myWork4.skills'),
		updateDate: t('myWork.myWork4.updateDate'),
	},
	{
		myWorkItem: {
			picture: kadernictvi,
			subtitle: t('myWork.myWork3.title'),
			githubLink: 'https://github.com/MartinaVilimova/kadernictvi',
		},
		authors: [dataAuthors[NameAuthors.MartinaVilimova]],
		filter: DataFilter.ownWork,
		description: t('myWork.myWork3.description'),
		carousel: [
			{
				src: kadernictvi,
				alt: t('myWork.myWork3.title'),
			},
		],
		skills: t('myWork.myWork3.skills'),
		updateDate: t('myWork.myWork3.updateDate'),
	},
	{
		myWorkItem: {
			picture: eaglefitness,
			subtitle: t('myWork.myWork2.title'),
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
		],
		filter: DataFilter.ownWork,
		description: t('myWork.myWork2.description'),
		carousel: [
			{
				src: eaglefitness,
				alt: t('myWork.myWork2.title'),
			},
		],
		skills: t('myWork.myWork2.skills'),
		updateDate: t('myWork.myWork2.updateDate'),
	},
	{
		myWorkItem: {
			picture: autoodstrejdy,
			subtitle: t('myWork.myWork1.title'),
			webLink: 'https://www.autoodstrejdy.cz/',
		},
		authors: [
			dataAuthors[NameAuthors.MartinaVilimova],
			dataAuthors[NameAuthors.TomasHampl],
		],
		filter: DataFilter.ownWork,
		description: t('myWork.myWork1.description'),
		carousel: [
			{
				src: autoodstrejdy,
				alt: t('myWork.myWork1.title'),
			},
		],
		skills: t('myWork.myWork1.skills'),
		updateDate: t('myWork.myWork1.updateDate'),
	},
]
