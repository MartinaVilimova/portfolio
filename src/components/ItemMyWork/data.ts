import autoodstrejdy from '../../assets/autoodstrejdy.png'
import kafickari from '../../assets/kafickari.png'
import eaglefitness from '../../assets/eaglefitness.png'
import cestovka from '../../assets/cestovka.png'
import zdravemlsani from '../../assets/zdravemlsani.png'
import kadernictvi from '../../assets/kadernictvi.png'
import pokemon from '../../assets/pokemon.png'

export type DataItemsMyWork = {
	picture: string
	subtitle: string
	webLink?: string
	githubLink?: string
}

export const dataMyWork: DataItemsMyWork[] = [
	{
		picture: autoodstrejdy,
		subtitle: 'Auto od strejdy',
		webLink: 'https://www.autoodstrejdy.cz/',
	},
	{
		picture: kafickari,
		subtitle: 'Kafíčkáři',
		webLink: 'http://kafickari.unas.cz/',
	},
	{
		picture: eaglefitness,
		subtitle: 'Eagle fitness',
	},
	{
		picture: cestovka,
		subtitle: 'Cestovka',
		githubLink: '/',
	},
	{
		picture: zdravemlsani,
		subtitle: 'Zdravé mlsání',
	},
	{
		picture: kadernictvi,
		subtitle: 'Kadeřnictví Scissors',
		githubLink: '/',
	},
	{
		picture: pokemon,
		subtitle: 'Pokemon',
		githubLink: '/',
	},
]
