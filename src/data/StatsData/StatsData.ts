import Handshake from '../../assets/images/home2/handshake.png';
import Brotherhood from '../../assets/images/home2/brotherhood.png';
import Earth from '../../assets/images/home2/earth.png';
import Doctor from '../../assets/images/home2/doctor.png';

interface StatsProps {
  id: number;
  imageIcon: string;
  count: string;
  nameIcon: string;
}

export const statsData: StatsProps[] = [
  {
    id: 1,
    imageIcon: Handshake,
    count: '100%',
    nameIcon: 'trusted clinic'
  },
  {
    id: 2,
    imageIcon: Brotherhood,
    count: '99%',
    nameIcon: 'customer love'
  },
  {
    id: 3,
    imageIcon: Earth,
    count: '75+',
    nameIcon: 'asian branch'
  },
  {
    id: 4,
    imageIcon: Doctor,
    count: '1.200+',
    nameIcon: 'licensed worker'
  }
]