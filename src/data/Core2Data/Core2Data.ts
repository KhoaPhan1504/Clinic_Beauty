import icon1 from '../../assets/images/home2/icon-1-core2.png';
import icon2 from '../../assets/images/home2/icon-2-core2.png';
import icon3 from '../../assets/images/home2/icon-3-core2.png';

interface Card {
  id: number,
  coreImage: string,
  coreInfoName: string,
  coreInfoDescribe: string,
  coreLearMore: string,
}

export const core2Data: Card[] = [
  {
    "id": 1,
    "coreImage": icon1,
    "coreInfoName": "Beauty consultation",
    "coreInfoDescribe": "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    "coreLearMore": "Learn more"
  },
  {
    "id": 2,
    "coreImage": icon2,
    "coreInfoName": "Skin treatments",
    "coreInfoDescribe": "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    "coreLearMore": "Learn more"
  },
  {
    "id": 3,
    "coreImage": icon3,
    "coreInfoName": "Beauty product",
    "coreInfoDescribe": "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    "coreLearMore": "Learn more"
  }
]