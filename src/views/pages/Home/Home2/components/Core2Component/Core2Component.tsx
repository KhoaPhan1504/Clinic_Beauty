import React, { useEffect, useState } from 'react';
import {
  Core,
  CoreDescribe,
  CoreItem,
  CoreItemCard,
  CoreLearnMore,
  CoreTip,
  CoreTitle,
  CoreWrapper,
  CoreWrapperCard,
  CoreWrapperText,
  IconLearMore,
} from './Core2.style';
import {
  CardDescribe,
  CardImage,
  CardImg,
  CardInfo,
  CardItem,
  CardName,
  CardWrapper,
} from '../../../../../../components/Card/Card.style';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { core2Data } from '../../../../../../data/Core2Data/Core2Data';

interface CoreProps {
  id: number;
  coreImage: string;
  coreInfoName: string;
  coreInfoDescribe: string;
  coreLearMore: string;
}

const Core2Component: React.FC = () => {
  const [cores, setCores] = useState<CoreProps[]>([]);

  useEffect(() => {
    setCores(core2Data);
  }, []);

  return (
    <Core>
      <CoreWrapper>
        <CoreWrapperText>
          <CoreTip>Main Services</CoreTip>
          <CoreTitle>Our focus services</CoreTitle>
          <CoreDescribe>Lorem ipsum dolor sit amet.</CoreDescribe>
        </CoreWrapperText>
        <CoreWrapperCard>
          <CoreItem>
            {cores.map((core) => (
              <CoreItemCard key={core.id} data-id={core.id}>
                <CardWrapper>
                  <CardItem>
                    <CardImage>
                      <CardImg src={core.coreImage} alt={core.coreInfoName} />
                    </CardImage>
                    <CardInfo>
                      <CardName>{core.coreInfoName}</CardName>
                      <CardDescribe>{core.coreInfoDescribe}</CardDescribe>
                    </CardInfo>
                    <CoreLearnMore>
                      {core.coreLearMore}
                      <IconLearMore icon={faAngleDoubleRight} />
                    </CoreLearnMore>
                  </CardItem>
                </CardWrapper>
              </CoreItemCard>
            ))}
          </CoreItem>
        </CoreWrapperCard>
      </CoreWrapper>
    </Core>
  );
};

export default Core2Component;
