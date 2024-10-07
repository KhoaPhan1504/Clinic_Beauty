import ContactBG from '../../assets/images/contact/Background Bubble.png';
import imageContact from '../../assets/images/contact/Contact .png';
import Map from '../../assets/images/contact/map.png';
import address from '../../assets/images/contact/map-marker-alt.png';
import phone from '../../assets/images/contact/phone-alt.png';
import mail from '../../assets/images/contact/mail-bulk.png';

interface Contact {
  id: number;
  imgSrc?: string;
  imageAlt?: string;
  tip?: string;
  subtile?: string;
  description?: string;
  className?: string;
}

export const contactInfo: Contact[] = [
  {
    id: 1,
    imgSrc: address,
    imageAlt: 'Map icon',
    tip: 'Address',
    subtile: '101 Baker Street, NY',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
  },
  {
    id: 2,
    imgSrc: phone,
    imageAlt: 'Phone icon',
    tip: 'Phone',
    subtile: '+896 120 5889',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
  },
  {
    id: 3,
    imgSrc: mail,
    imageAlt: 'Mail icon',
    tip: 'Mail',
    subtile: 'mail@company.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit',
  },
];

export const contact = {
  contactBG: ContactBG,
  imageContact: imageContact,
  map: Map,
  address: address,
  phone: phone,
  mail: mail,
};
