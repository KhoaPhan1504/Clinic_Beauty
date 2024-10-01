import React, { useEffect, useState } from 'react';
import {
  ContactIcon,
  ContactItem,
  CardContactWrapper,
  ProfessionItemCard,
  CardRole,
  Profession,
  ProfessionDesc,
  ProfessionWrapper,
  ProInfoDescribe,
  ProInfoTip,
  ProInfoTitle,
  ProItem,
  ProItemRow,
  ProItemWrapper,
  CardWrapperPro,
  ProfessionBG,
} from './Profession.style';
import { proData } from '../../../../../../data/ProfessionData/ProfessionData';
import {
  CardDescribe,
  CardImage,
  CardImg,
  CardInfo,
  CardItem,
  CardName,
} from '../../../../../../components/Card/Card.style';

interface ProProps {
  id: number;
  cardImage: string;
  cardInfoTitle: string;
  cardInfoName: string;
  cardInfoDescribe: string;
  Twitter: string;
  Facebook: string;
  Instagram: string;
}

interface ProfessionComponentProps {
  bgSrc?: string;
  tipText: string;
  titleText: string;
  describeText: string;
  classNameBG?: string;
  className?: string;
}

const ProfessionComponent: React.FC<ProfessionComponentProps> = ({
  bgSrc,
  tipText,
  titleText,
  describeText,
  classNameBG,
  className,
}) => {
  const [pros, setPros] = useState<ProProps[]>([]);

  const [activeCard, setActiveCard] = useState<number>(2);

  const handleMouseEnter = (id: number) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard(2);
  };

  useEffect(() => {
    setPros(proData);
  }, []);

  return (
    <Profession className={className}>
      <ProfessionBG src={bgSrc} className={classNameBG} />
      <ProfessionWrapper>
        <ProfessionDesc>
          <ProInfoTip>{tipText}</ProInfoTip>
          <ProInfoTitle>{titleText}</ProInfoTitle>
          <ProInfoDescribe>{describeText}</ProInfoDescribe>
        </ProfessionDesc>
        <ProItem>
          <ProItemWrapper>
            {pros.map((pro) => (
              <ProItemRow
                key={pro.id}
                onMouseEnter={() => handleMouseEnter(pro.id)}
                onMouseLeave={handleMouseLeave}
                className={pro.id === activeCard ? 'active' : ''}
              >
                <ProfessionItemCard>
                  <CardWrapperPro data-id={pro.id}>
                    <CardItem>
                      <CardImage>
                        <CardImg src={pro.cardImage} alt="" />
                      </CardImage>
                      <CardInfo>
                        <CardRole>{pro.cardInfoTitle}</CardRole>
                        <CardName>{pro.cardInfoName}</CardName>
                        <CardDescribe>{pro.cardInfoDescribe}</CardDescribe>
                      </CardInfo>
                      <CardContactWrapper>
                        <ContactItem href="">
                          <ContactIcon src={pro.Twitter} />
                        </ContactItem>
                        <ContactItem href="">
                          <ContactIcon src={pro.Facebook} />
                        </ContactItem>
                        <ContactItem href="">
                          <ContactIcon src={pro.Instagram} />
                        </ContactItem>
                      </CardContactWrapper>
                    </CardItem>
                  </CardWrapperPro>
                </ProfessionItemCard>
              </ProItemRow>
            ))}
          </ProItemWrapper>
        </ProItem>
      </ProfessionWrapper>
    </Profession>
  );
};

export default ProfessionComponent;
