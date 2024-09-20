import proLeft from '../../assets/images/home1/unsplash_pTrhfmj2jDA.png';
import proCenter from '../../assets/images/home1/unsplash_FVh_yqLR9eA.png';
import proRight from '../../assets/images/home1/unsplash_mEZ3PoFGs_k.png';
import contactTwitter from '../../assets/images/home1/Twitter_Circle.svg';
import contactFB from '../../assets/images/home1/FB_Circle.svg';
import contactInsta from '../../assets/images/home1/Insta_Circle.svg';

interface Card {
  id: number,
  cardImage: string,
  cardInfoTitle: string,
  cardInfoName: string,
  cardInfoDescribe: string,
  cardContactTwitter: string,
  cardContactFB: string,
  cardContactInsta: string
}

export const proData: Card[] =[
  {
    "id": 1,
    "cardImage": proLeft,
    "cardInfoTitle": "Surgeon",
    "cardInfoName": "Briyan Nevalli",
    "cardInfoDescribe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    "cardContactTwitter": contactTwitter,
    "cardContactFB": contactFB,
    "cardContactInsta": contactInsta
  },
  {
    "id": 2,
    "cardImage": proCenter,
    "cardInfoTitle": "Dermatologist",
    "cardInfoName": "Bella sebastian",
    "cardInfoDescribe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    "cardContactTwitter": contactTwitter,
    "cardContactFB": contactFB,
    "cardContactInsta": contactInsta
  },
  {
    "id": 3,
    "cardImage": proRight,
    "cardInfoTitle": "Stylist expert",
    "cardInfoName": "Lilly Adams",
    "cardInfoDescribe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
    "cardContactTwitter": contactTwitter,
    "cardContactFB": contactFB,
    "cardContactInsta": contactInsta
  }
]