import autoodstrejdy from '../../assets/autoodstrejdy.png'
import kafickari from '../../assets/kafickari.png'
import eaglefitness from '../../assets/eaglefitness.png'
import cestovka from '../../assets/cestovka.png'
import zdravemlsani from '../../assets/zdravemlsani.png'
import kadernictvi from '../../assets/kadernictvi.png'
import pokemon from '../../assets/pokemon.png'

export type DataItemsMyWork = {
	picture: string
	id: string
	subtitle: string
}

export const dataMyWork: DataItemsMyWork[] = [
	{
		picture: autoodstrejdy,
		id: 'a',
		subtitle: 'Auto od strejdy',
	},
	{
		picture: kafickari,
		id: 'b',
		subtitle: 'Kafíčkáři',
	},
	{
		picture: eaglefitness,
		id: 'c',
		subtitle: 'Eagle fitness',
	},
	{
		picture: cestovka,
		id: 'e',
		subtitle: 'Cestovka',
	},
	{
		picture: zdravemlsani,
		id: 'f',
		subtitle: 'Zdravé mlsání',
	},
	{
		picture: kadernictvi,
		id: 'g',
		subtitle: 'Kadeřnictví Scissors',
	},
	{
		picture: pokemon,
		id: 'h',
		subtitle: 'Pokemon',
	},
]
