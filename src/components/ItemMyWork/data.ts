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
}

export const dataMyWork: DataItemsMyWork[] = [
	{
		picture: autoodstrejdy,
		subtitle: 'Auto od strejdy',
	},
	{
		picture: kafickari,
		subtitle: 'Kafíčkáři',
	},
	{
		picture: eaglefitness,
		subtitle: 'Eagle fitness',
	},
	{
		picture: cestovka,
		subtitle: 'Cestovka',
	},
	{
		picture: zdravemlsani,
		subtitle: 'Zdravé mlsání',
	},
	{
		picture: kadernictvi,
		subtitle: 'Kadeřnictví Scissors',
	},
	{
		picture: pokemon,
		subtitle: 'Pokemon',
	},
]
