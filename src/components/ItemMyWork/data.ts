import { TFunction } from 'react-i18next'
import autoodstrejdy from 'assets/autoodstrejdy/autoodstrejdy.png'
import autoodstrejdy1 from 'assets/autoodstrejdy/autoodstrejdy1.png'
import autoodstrejdy2 from 'assets/autoodstrejdy/autoodstrejdy2.png'
import autoodstrejdy3 from 'assets/autoodstrejdy/autoodstrejdy3.png'
import autoodstrejdy4 from 'assets/autoodstrejdy/autoodstrejdy4.png'
import autoodstrejdy5 from 'assets/autoodstrejdy/autoodstrejdy5.png'
import eaglefitness from 'assets/eaglefitness/eaglefitness.png'
import eaglefitness1 from 'assets/eaglefitness/eaglefitness1.png'
import eaglefitness2 from 'assets/eaglefitness/eaglefitness2.png'
import eaglefitness3 from 'assets/eaglefitness/eaglefitness3.png'
import eaglefitness4 from 'assets/eaglefitness/eaglefitness4.png'
import eaglefitness5 from 'assets/eaglefitness/eaglefitness5.png'
import eaglefitness6 from 'assets/eaglefitness/eaglefitness6.png'
import eaglefitness7 from 'assets/eaglefitness/eaglefitness7.png'
import kadernictvi from 'assets/kadernictvi/kadernictvi.png'
import kadernictvi1 from 'assets/kadernictvi/kadernictvi1.png'
import cestovka from 'assets/cestovka/cestovka.png'
import cestovka1 from 'assets/cestovka/cestovka1.png'
import cestovka2 from 'assets/cestovka/cestovka2.png'
import cestovka3 from 'assets/cestovka/cestovka3.png'
import cestovka4 from 'assets/cestovka/cestovka4.png'
import kafickari from 'assets/kafickari/kafickari.png'
import kafickari1 from 'assets/kafickari/kafickari1.png'
import kafickari2 from 'assets/kafickari/kafickari2.png'
import kafickari3 from 'assets/kafickari/kafickari3.png'
import kafickari4 from 'assets/kafickari/kafickari4.png'
import kafickari5 from 'assets/kafickari/kafickari5.png'
import kafickari6 from 'assets/kafickari/kafickari6.png'
import kafickari7 from 'assets/kafickari/kafickari7.png'
import kafickari8 from 'assets/kafickari/kafickari8.png'
import kafickari9 from 'assets/kafickari/kafickari9.png'
import kafickari10 from 'assets/kafickari/kafickari10.png'
import kafickari11 from 'assets/kafickari/kafickari11.png'
import kafickari12 from 'assets/kafickari/kafickari12.png'
import kafickari13 from 'assets/kafickari/kafickari13.png'
import pokemon from 'assets/pokemon/pokemon.png'
import portfolio from 'assets/portfolio/portfolio.png'
import portfolio4 from 'assets/portfolio/portfolio4.png'
import portfolio5 from 'assets/portfolio/portfolio5.png'
import ajtyspojka from 'assets/ajtyspojka/ajtyspojka.png'
import ajtyspojka1 from 'assets/ajtyspojka/ajtyspojka1.png'
import ajtyspojka2 from 'assets/ajtyspojka/ajtyspojka2.png'
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
			picture: ajtyspojka,
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
				src: ajtyspojka1,
				alt: t('myWork.myWork8.title'),
			},
			{
				src: ajtyspojka2,
				alt: t('myWork.myWork8.title'),
			},
		],
		skills: t('myWork.myWork8.skills'),
		updateDate: t('myWork.myWork8.updateDate'),
	},
	{
		myWorkItem: {
			picture: portfolio,
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
				src: portfolio4,
				alt: t('myWork.myWork7.title'),
			},
			{
				src: portfolio5,
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
				src: kafickari1,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari2,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari3,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari4,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari5,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari6,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari7,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari8,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari9,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari10,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari11,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari12,
				alt: t('myWork.myWork5.title'),
			},
			{
				src: kafickari13,
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
				src: cestovka1,
				alt: t('myWork.myWork4.title'),
			},
			{
				src: cestovka2,
				alt: t('myWork.myWork4.title'),
			},
			{
				src: cestovka3,
				alt: t('myWork.myWork4.title'),
			},
			{
				src: cestovka4,
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
				src: kadernictvi1,
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
				src: eaglefitness1,
				alt: t('myWork.myWork2.title'),
			},
			{
				src: eaglefitness2,
				alt: t('myWork.myWork2.title'),
			},
			{
				src: eaglefitness3,
				alt: t('myWork.myWork2.title'),
			},
			{
				src: eaglefitness4,
				alt: t('myWork.myWork2.title'),
			},
			{
				src: eaglefitness5,
				alt: t('myWork.myWork2.title'),
			},
			{
				src: eaglefitness6,
				alt: t('myWork.myWork2.title'),
			},
			{
				src: eaglefitness7,
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
				src: autoodstrejdy1,
				alt: t('myWork.myWork1.title'),
			},
			{
				src: autoodstrejdy2,
				alt: t('myWork.myWork1.title'),
			},
			{
				src: autoodstrejdy3,
				alt: t('myWork.myWork1.title'),
			},
			{
				src: autoodstrejdy4,
				alt: t('myWork.myWork1.title'),
			},
			{
				src: autoodstrejdy5,
				alt: t('myWork.myWork1.title'),
			},
		],
		skills: t('myWork.myWork1.skills'),
		updateDate: t('myWork.myWork1.updateDate'),
	},
]
