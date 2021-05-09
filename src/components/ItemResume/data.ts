import { TFunction } from 'react-i18next'

export type DataItemsResume = {
	title: string
	specialization?: string
	time: string
	paragraph: string
}

export const getDataEducation = (
	t: TFunction<'translation'>
): DataItemsResume[] => [
	{
		title: t('resume.education2.title'),
		specialization: t('resume.education2.specialization'),
		time: t('resume.education2.time'),
		paragraph: t('resume.education2.paragraph'),
	},
	{
		title: t('resume.education1.title'),
		specialization: t('resume.education1.specialization'),
		time: t('resume.education1.time'),
		paragraph: t('resume.education1.paragraph'),
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
	},
]

export const getDataKnowledge = (
	t: TFunction<'translation'>
): DataItemsResume[] => [
	{
		title: t('knowledge.knowledge13.title'),
		specialization: t('knowledge.knowledge13.specialization'),
		time: t('knowledge.knowledge13.time'),
		paragraph: t('knowledge.knowledge13.paragraph'),
	},
	{
		title: t('knowledge.knowledge12.title'),
		specialization: t('knowledge.knowledge12.specialization'),
		time: t('knowledge.knowledge12.time'),
		paragraph: t('knowledge.knowledge12.paragraph'),
	},
	{
		title: t('knowledge.knowledge11.title'),
		specialization: t('knowledge.knowledge11.specialization'),
		time: t('knowledge.knowledge11.time'),
		paragraph: t('knowledge.knowledge11.paragraph'),
	},
	{
		title: t('knowledge.knowledge10.title'),
		specialization: t('knowledge.knowledge10.specialization'),
		time: t('knowledge.knowledge10.time'),
		paragraph: t('knowledge.knowledge10.paragraph'),
	},
	{
		title: t('knowledge.knowledge9.title'),
		specialization: t('knowledge.knowledge9.specialization'),
		time: t('knowledge.knowledge9.time'),
		paragraph: t('knowledge.knowledge9.paragraph'),
	},
	{
		title: t('knowledge.knowledge8.title'),
		specialization: t('knowledge.knowledge8.specialization'),
		time: t('knowledge.knowledge8.time'),
		paragraph: t('knowledge.knowledge8.paragraph'),
	},
	{
		title: t('knowledge.knowledge7.title'),
		specialization: t('knowledge.knowledge7.specialization'),
		time: t('knowledge.knowledge7.time'),
		paragraph: t('knowledge.knowledge7.paragraph'),
	},
	{
		title: t('knowledge.knowledge6.title'),
		specialization: t('knowledge.knowledge6.specialization'),
		time: t('knowledge.knowledge6.time'),
		paragraph: t('knowledge.knowledge6.paragraph'),
	},
	{
		title: t('knowledge.knowledge5.title'),
		specialization: t('knowledge.knowledge5.specialization'),
		time: t('knowledge.knowledge5.time'),
		paragraph: t('knowledge.knowledge5.paragraph'),
	},
	{
		title: t('knowledge.knowledge4.title'),
		specialization: t('knowledge.knowledge4.specialization'),
		time: t('knowledge.knowledge4.time'),
		paragraph: t('knowledge.knowledge4.paragraph'),
	},
	{
		title: t('knowledge.knowledge3.title'),
		specialization: t('knowledge.knowledge3.specialization'),
		time: t('knowledge.knowledge3.time'),
		paragraph: t('knowledge.knowledge3.paragraph'),
	},
	{
		title: t('knowledge.knowledge2.title'),
		specialization: t('knowledge.knowledge2.specialization'),
		time: t('knowledge.knowledge2.time'),
		paragraph: t('knowledge.knowledge2.paragraph'),
	},
	{
		title: t('knowledge.knowledge1.title'),
		specialization: t('knowledge.knowledge1.specialization'),
		time: t('knowledge.knowledge1.time'),
		paragraph: t('knowledge.knowledge1.paragraph'),
	},
]
