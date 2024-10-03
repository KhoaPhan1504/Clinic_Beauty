import React, { useEffect, useState } from 'react';
import {
  ContactIcon,
  ContactItem,
  CardContactWrapper,
  OurItemCard,
  CardRole,
  Our,
  OurDesc,
  OurWrapper,
  OurInfoDescribe,
  OurInfoTip,
  OurInfoTitle,
  OurItem,
  OurItemRow,
  OurItemWrapper,
  CardWrapperOur,
  OurBG,
} from './Our.style';
import { proData } from '../../../../../data/ProfessionData/ProfessionData';
import {
  CardDescribe,
  CardImage,
  CardImg,
  CardInfo,
  CardItem,
  CardName,
} from '../../../../../components/Card/Card.style';

interface OurOurps {
  id: number;
  cardImage: string;
  cardInfoTitle: string;
  cardInfoName: string;
  cardInfoDescribe: string;
  Twitter: string;
  Facebook: string;
  Instagram: string;
}

interface OurComponentOurps {
  bgSrc?: string;
  tipText: string;
  titleText: string;
  describeText: string;
  classNameBG?: string;
  className?: string;
}

const OurComponent: React.FC<OurComponentOurps> = ({
  bgSrc,
  tipText,
  titleText,
  describeText,
  classNameBG,
  className,
}) => {
  const [Ours, setOurs] = useState<OurOurps[]>([]);

  const [activeCard, setActiveCard] = useState<number>(2);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(2);
  };

  useEffect(() => {
    setOurs(proData);
  }, []);

  return (
    <Our className={className}>
      <OurBG src={bgSrc} className={classNameBG} />
      <OurWrapper>
        <OurDesc>
          <OurInfoTip>{tipText}</OurInfoTip>
          <OurInfoTitle>{titleText}</OurInfoTitle>
          <OurInfoDescribe>{describeText}</OurInfoDescribe>
        </OurDesc>
        <OurItem>
          <OurItemWrapper>
            {Ours.map((Our) => (
              <OurItemRow
                key={Our.id}
                onMouseEnter={() => handleMouseEnter(Our.id)}
                onMouseLeave={handleMouseLeave}
                className={Our.id === activeCard ? 'active' : ''}
              >
                <OurItemCard>
                  <CardWrapperOur data-id={Our.id}>
                    <CardItem>
                      <CardImage>
                        <CardImg src={Our.cardImage} alt="" />
                      </CardImage>
                      <CardInfo>
                        <CardRole>{Our.cardInfoTitle}</CardRole>
                        <CardName>{Our.cardInfoName}</CardName>
                        <CardDescribe>{Our.cardInfoDescribe}</CardDescribe>
                      </CardInfo>
                      <CardContactWrapper>
                        <ContactItem href="">
                          <ContactIcon src={Our.Twitter} />
                        </ContactItem>
                        <ContactItem href="">
                          <ContactIcon src={Our.Facebook} />
                        </ContactItem>
                        <ContactItem href="">
                          <ContactIcon src={Our.Instagram} />
                        </ContactItem>
                      </CardContactWrapper>
                    </CardItem>
                  </CardWrapperOur>
                </OurItemCard>
              </OurItemRow>
            ))}
          </OurItemWrapper>
        </OurItem>
      </OurWrapper>
    </Our>
  );
};

export default OurComponent;
