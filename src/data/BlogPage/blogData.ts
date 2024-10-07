import blog1 from '../../assets/images/blog/blog1.png';
import blog2 from '../../assets/images/blog/blog2.png';
import blog3 from '../../assets/images/blog/blog3.png';

import Mask from '../../assets/images/blog/Background Mask.png';
import Background from '../../assets/images/blog/Background.png';
import SearchIcon from '../../assets/images/blog/search_icon.png';
import RecentPost1 from '../../assets/images/blog/recent1.png';
import RecentPost2 from '../../assets/images/blog/recent2.png';
import RecentPost3 from '../../assets/images/blog/recent3.png';

import Facebook from '../../assets/images/blog/facebook.png';
import Twitter from '../../assets/images/blog/Twitter.png';
import Instagram from '../../assets/images/blog/Instagram.png';
import Linkedin from '../../assets/images/blog/Linkedin.png';

import FolderIcon from '../../assets/images/blog/folderIcon.png';

interface Card {
  id: number;
  imageSrc: string;
  categories: string;
  title: string;
  describe: string;
}

interface Recent {
  id: number;
  imageSrc: string;
  day: string;
  des: string;
}

export const article: Card[] = [
  {
    id: 1,
    imageSrc: blog1,
    categories: 'Consultation',
    title: 'How much does a consultation cost at our clinic?',
    describe:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 2,
    imageSrc: blog2,
    categories: 'Beauty',
    title: "Watch out! don't choose the wrong beauty product",
    describe:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
  {
    id: 3,
    imageSrc: blog3,
    categories: 'Treatments',
    title: 'About skin care you need to know',
    describe:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…',
  },
];

export const Widget: Recent[] = [
  {
    id: 1,
    imageSrc: RecentPost1,
    day: '01 jan 2021',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 2,
    imageSrc: RecentPost2,
    day: '01 jan 2021',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
    id: 3,
    imageSrc: RecentPost3,
    day: '01 jan 2021',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  },
];

export const Cloud = [
  'beauty',
  'cute',
  'skin',
  'glow',
  'style',
  'clinic',
  'style',
  'great',
  'cute',
];

export const Social = [Facebook, Twitter, Instagram, Linkedin];

export const ImageBlog = {
  BGMask: Mask,
  BG: Background,
  SearchIcon: SearchIcon,
  FolderIcon: FolderIcon,
};
