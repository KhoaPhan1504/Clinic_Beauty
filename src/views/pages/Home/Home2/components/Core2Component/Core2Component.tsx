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
  Card2Image,
  Card2Wrapper
} from './Core2.style';
import {
  CardDescribe,
  CardImg,
  CardInfo,
  CardItem,
  CardName,
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
                <Card2Wrapper>
                  <CardItem className='items-start mt-0'>
                    <Card2Image>
                      <CardImg className='rounded-none' src={core.coreImage} alt={core.coreInfoName} />
                    </Card2Image>
                    <CardInfo className='items-start text-start'>
                      <CardName className='text-start'>{core.coreInfoName}</CardName>
                      <CardDescribe>{core.coreInfoDescribe}</CardDescribe>
                    </CardInfo>
                    <CoreLearnMore>
                      {core.coreLearMore}
                      <IconLearMore icon={faAngleDoubleRight} />
                    </CoreLearnMore>
                  </CardItem>
                </Card2Wrapper>
              </CoreItemCard>
            ))}
          </CoreItem>
        </CoreWrapperCard>
      </CoreWrapper>
    </Core>
  );
};

export default Core2Component;
