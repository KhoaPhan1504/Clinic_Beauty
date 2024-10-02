interface FAQProps {
  id: number;
  ask: string;
  q1?: string;
  q2?: string;
}

export const FAQData: FAQProps[] = [
  {
    id: 1,
    ask: 'Is beauty consultation handled thoroughly?',
    q1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna',
    q2: 'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
  },
  {
    id: 2,
    ask: 'Can I be beautiful in an instant time?',
    q1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna',
    q2: 'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
  },
  {
    id: 3,
    ask: 'Are there any side effects to the treatment methods or treatments at this clinic?',
    q1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna',
    q2: 'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
  },
  {
    id: 4,
    ask: 'Do professionals have accreditation in their respective fields?',
    q1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna',
    q2: 'porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla',
  },
];
