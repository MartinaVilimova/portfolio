import autoodstrejdy from '../../assets/autoodstrejdy.png'
import kafickari from '../../assets/kafickari.png'
import eaglefitness from '../../assets/eaglefitness.png'
import cestovka from '../../assets/cestovka.png'
import zdravemlsani from '../../assets/zdravemlsani.png'
import kadernictvi from '../../assets/kadernictvi.png'
import pokemon from '../../assets/pokemon.png'

type DataPicture = {
	src: string
	alt: string
}

export const dataPictures: DataPicture[] = [
	{
		src: autoodstrejdy,
		alt: 'auto od strejdy',
	},
	{
		src: kafickari,
		alt: 'kafíčkáři',
	},
	{
		src: eaglefitness,
		alt: 'eagle fitness',
	},
	{
		src: cestovka,
		alt: 'cestovka',
	},
	{
		src: kadernictvi,
		alt: 'kadernictvi',
	},
	{
		src: pokemon,
		alt: 'pokemon',
	},
	{
		src: zdravemlsani,
		alt: 'zdrave mlsani',
	},
]
