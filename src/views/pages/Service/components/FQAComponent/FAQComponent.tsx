import React, { RefObject, useEffect, useState } from 'react';
import { FAQ, FAQList, HeadingFAQ, Underline } from './FAQ.style';
import Container from '../../../../../components/Container/Container';
import HeadingTitle from './components/HeadingTitle';
import FAQItem from './components/FAQItem';
import FAQContent from './components/FAQContent';
import { FAQData } from '../../../../../data/FAQData/FAQData';

interface FAQProps {
  id: number;
  ask: string;
  q1?: string;
  q2?: string;
}

const FQAComponent: React.FC = () => {
  const [faqs, setFAQs] = useState<FAQProps[]>([]);

  useEffect(() => {
    setFAQs(FAQData);
  });

  return (
    <FAQ>
      <Container className="lg:max-w-[972px]">
        <HeadingFAQ>
          <HeadingTitle className="ml-[9px] translate-x-[0.4px]">
            Services FAQ’s
          </HeadingTitle>
          <Underline />
        </HeadingFAQ>
        {faqs.map((faq) => (
          <FAQList key={faq.id} data-id={faq.id}>
            <FAQItem title={faq.ask} defaultOpen={faq.id === 1}>
              {({ ref }) => (
                <FAQContent ref={ref as RefObject<HTMLParagraphElement>}>
                  <span>{faq.q1}</span>
                  <span>{faq.q2}</span>
                </FAQContent>
              )}
            </FAQItem>
          </FAQList>
        ))}
      </Container>
    </FAQ>
  );
};

export default FQAComponent;
