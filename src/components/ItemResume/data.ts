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

export const getDataKnowledge: DataItemsResume[] = [
	{
		title: 'React Hooks',
		time: 'Duben 2021',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'React Form',
		time: 'Únor 2021',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'React',
		time: 'Leden 2021',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'React Router Dom',
		time: 'Leden 2021',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'WordPress',
		time: 'Říjen 2020',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'Boostrap',
		time: 'Září 2020',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'Czechitas Web od A do Z 2',
		time: 'Srpen 2020',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'Vidia Design',
		time: 'Listopad 2019',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'CSS',
		time: 'Červenec 2019',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
	{
		title: 'Html',
		time: 'Červenec 2019',
		paragraph:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi molestias officiis alias recusandae rem quos similique. Esse, pariatur. Architecto soluta perferendis eum? Accusantium similique laudantium quidem delectus non? Iusto.',
	},
]
