import { TFunction } from 'react-i18next'

export type MenuLinksType = {
	link: string
	name: string
}

export const getMenuLinks = (t: TFunction<'translation'>): MenuLinksType[] => [
	{
		link: '/about-me',
		name: t('menu.aboutMe'),
	},
	{
		link: '/resume',
		name: t('menu.resume'),
	},
	{
		link: '/knowledge',
		name: t('menu.knowledge'),
	},
	{
		link: '/my-work',
		name: t('menu.myWork'),
	},
	{
		link: '/contact',
		name: t('menu.contact'),
	},
]
