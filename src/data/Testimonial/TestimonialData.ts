import client1 from '../../assets/images/team/human1.png';
import client2 from '../../assets/images/team/human2.png';
import client3 from '../../assets/images/team/human3.png';

interface TestimonialProps {
  id: number;
  image: string;
  content: string;
}

export const testimonialData: TestimonialProps[] = [
  {
    id: 1,
    image: client1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
  },
  {
    id: 2,
    image: client2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
  },
  {
    id: 3,
    image: client3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.',
  },
];
