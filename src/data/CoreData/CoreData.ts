import coreLeft from '../../assets/images/home1/Core_Left.svg';
import coreCenter from '../../assets/images/home1/Core_Center.svg';
import coreRight from '../../assets/images/home1/Core_Right.svg';

interface Card {
  id: number,
  cardImage: string,
  cardInfoName: string,
  cardInfoDescribe: string
}

export const coreData: Card[] = [
  {
    "id": 1,
    "cardImage": coreLeft,
    "cardInfoName": "Beauty consultation",
    "cardInfoDescribe": "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
  },
  {
    "id": 2,
    "cardImage": coreCenter,
    "cardInfoName": "Skin treatments",
    "cardInfoDescribe": "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
  },
  {
    "id": 3,
    "cardImage": coreRight,
    "cardInfoName": "Beauty product",
    "cardInfoDescribe": "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
  }
]