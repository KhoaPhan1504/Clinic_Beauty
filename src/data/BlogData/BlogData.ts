import image1 from '../../assets/images/home2/blog1.png';
import image2 from '../../assets/images/home2/blog2.png';
import image3 from '../../assets/images/home2/blog3.png';

interface Card {
  id: number;
  blogImage: string;
  blogInfoName: string;
  blogInfoDescribe: string;
  blogLearMore: string;
}

export const blogData: Card[] = [
  {
    id: 1,
    blogImage: image1,
    blogInfoName: 'How much does a consultation cost at our clinic?',
    blogInfoDescribe:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
    blogLearMore: 'Learn more',
  },
  {
    id: 2,
    blogImage: image2,
    blogInfoName: "Watch out! don't choose the wrong beauty product",
    blogInfoDescribe:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
    blogLearMore: 'Learn more',
  },
  {
    id: 3,
    blogImage: image3,
    blogInfoName: 'About skin care you need to know',
    blogInfoDescribe:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...',
    blogLearMore: 'Learn more',
  },
];
