import autoodstrejdy from '../../assets/autoodstrejdy.png'
import kafickari from '../../assets/kafickari.png'
import eaglefitness from '../../assets/eaglefitness.png'
import cestovka from '../../assets/cestovka.png'
import zdravemlsani from '../../assets/zdravemlsani.png'
import kadernictvi from '../../assets/kadernictvi.png'
import pokemom from '../../assets/pokemom.png'

export type DataItemsMyWork = {
    picture: string
    id: string
}

export const DataMyWork: DataItemsMyWork[] = [
    {
        picture: autoodstrejdy,
        id: 'a'
    },
    {
        picture: kafickari,
        id: 'b'
    },
    {
        picture: eaglefitness,
        id: 'c'
    },
    {
        picture: cestovka,
        id: 'e'
    },
    {
        picture: zdravemlsani,
        id: 'f'
    },
    {
        picture: kadernictvi,
        id: 'g'
    },
    {
        picture: pokemom,
        id: 'h'
    }
]