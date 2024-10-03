import assistance1 from '../../assets/images/team/assistance1.png';
import assistance2 from '../../assets/images/team/assistance2.png';
import assistance3 from '../../assets/images/team/assistance3.png';

interface Assistance {
  id: number;
  imageSrc: string;
  name: string;
  job: string;
  introduce: string;
}

export const assistanceData: Assistance[] = [
  {
    id: 1,
    imageSrc: assistance1,
    name: 'Lina Gustav',
    job: 'Pharmacist',
    introduce:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
  },
  {
    id: 2,
    imageSrc: assistance2,
    name: 'Adam White',
    job: 'Finance',
    introduce:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
  },
  {
    id: 3,
    imageSrc: assistance3,
    name: 'Jane Doe',
    job: 'Marketert',
    introduce:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.',
  },
];
