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
  Card2Wrapper,
  Card2Info,
  Card2Name,
  Card2Describe,
  Card2Item,
} from './Core2.style';
import { CardImg } from '../../../../../../components/Card/Card.style';
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
                  <Card2Item>
                    <Card2Image>
                      <CardImg
                        className="rounded-none"
                        src={core.coreImage}
                        alt={core.coreInfoName}
                      />
                    </Card2Image>
                    <Card2Info>
                      <Card2Name>{core.coreInfoName}</Card2Name>
                      <Card2Describe>{core.coreInfoDescribe}</Card2Describe>
                    </Card2Info>
                    <CoreLearnMore>
                      {core.coreLearMore}
                      <IconLearMore icon={faAngleDoubleRight} />
                    </CoreLearnMore>
                  </Card2Item>
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
