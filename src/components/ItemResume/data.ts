import { TFunction } from 'react-i18next'

export enum TitleType {
	program = 'program',
	code = 'code',
	education = 'education',
	experience = 'experience',
}

export type DataItemsResume = {
	title: string
	specialization?: string
	time?: string
	paragraph?: string
	type: TitleType
	isVisible?: boolean
}

export const getDataEducation = (
	t: TFunction<'translation'>
): DataItemsResume[] => [
	{
		title: t('resume.education2.title'),
		specialization: t('resume.education2.specialization'),
		time: t('resume.education2.time'),
		paragraph: t('resume.education2.paragraph'),
		type: TitleType.education,
	},
	{
		title: t('resume.education1.title'),
		specialization: t('resume.education1.specialization'),
		time: t('resume.education1.time'),
		paragraph: t('resume.education1.paragraph'),
		type: TitleType.education,
	},
]

export const getDataExperience = (
	t: TFunction<'translation'>
): DataItemsResume[] => [
	{
		title: t('resume.experience1.title'),
		specialization: t('resume.experience1.specialization'),
		time: t('resume.experience1.time'),
		paragraph: t('resume.experience1.paragraph'),
		type: TitleType.experience,
	},
]

export const getDataKnowledge = (
	t: TFunction<'translation'>
): DataItemsResume[] => [
	{
		title: t('knowledge.knowledge19.title'),
		specialization: t('knowledge.knowledge19.specialization'),
		time: t('knowledge.knowledge19.time'),
		paragraph: t('knowledge.knowledge19.paragraph'),
		type: TitleType.program,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge18.title'),
		specialization: t('knowledge.knowledge18.specialization'),
		time: t('knowledge.knowledge18.time'),
		paragraph: t('knowledge.knowledge18.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge17.title'),
		specialization: t('knowledge.knowledge17.specialization'),
		time: t('knowledge.knowledge17.time'),
		paragraph: t('knowledge.knowledge17.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge16.title'),
		specialization: t('knowledge.knowledge16.specialization'),
		time: t('knowledge.knowledge16.time'),
		paragraph: t('knowledge.knowledge16.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge15.title'),
		specialization: t('knowledge.knowledge15.specialization'),
		time: t('knowledge.knowledge15.time'),
		paragraph: t('knowledge.knowledge15.paragraph'),
		type: TitleType.program,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge14.title'),
		specialization: t('knowledge.knowledge14.specialization'),
		time: t('knowledge.knowledge14.time'),
		paragraph: t('knowledge.knowledge14.paragraph'),
		type: TitleType.program,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge13.title'),
		specialization: t('knowledge.knowledge13.specialization'),
		time: t('knowledge.knowledge13.time'),
		paragraph: t('knowledge.knowledge13.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge12.title'),
		specialization: t('knowledge.knowledge12.specialization'),
		time: t('knowledge.knowledge12.time'),
		paragraph: t('knowledge.knowledge12.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge11.title'),
		specialization: t('knowledge.knowledge11.specialization'),
		time: t('knowledge.knowledge11.time'),
		paragraph: t('knowledge.knowledge11.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge10.title'),
		type: TitleType.program,
		isVisible: false,
	},
	{
		title: t('knowledge.knowledge9.title'),
		specialization: t('knowledge.knowledge9.specialization'),
		time: t('knowledge.knowledge9.time'),
		paragraph: t('knowledge.knowledge9.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge8.title'),
		specialization: t('knowledge.knowledge8.specialization'),
		time: t('knowledge.knowledge8.time'),
		paragraph: t('knowledge.knowledge8.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge7.title'),
		type: TitleType.program,
		isVisible: false,
	},
	{
		title: t('knowledge.knowledge6.title'),
		type: TitleType.program,
		isVisible: false,
	},
	{
		title: t('knowledge.knowledge5.title'),
		specialization: t('knowledge.knowledge5.specialization'),
		time: t('knowledge.knowledge5.time'),
		paragraph: t('knowledge.knowledge5.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge4.title'),
		specialization: t('knowledge.knowledge4.specialization'),
		time: t('knowledge.knowledge4.time'),
		paragraph: t('knowledge.knowledge4.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge3.title'),
		specialization: t('knowledge.knowledge3.specialization'),
		time: t('knowledge.knowledge3.time'),
		paragraph: t('knowledge.knowledge3.paragraph'),
		type: TitleType.code,
		isVisible: true,
	},
	{
		title: t('knowledge.knowledge2.title'),
		type: TitleType.program,
		isVisible: false,
	},
	{
		title: t('knowledge.knowledge1.title'),
		specialization: t('knowledge.knowledge1.specialization'),
		time: t('knowledge.knowledge1.time'),
		paragraph: t('knowledge.knowledge1.paragraph'),
		type: TitleType.program,
		isVisible: true,
	},
]
