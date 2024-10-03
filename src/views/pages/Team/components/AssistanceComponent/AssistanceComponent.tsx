import React, { useEffect, useState } from 'react';
import {
  Assistance,
  DescribeText,
  Introduce,
  Job,
  Name,
  Personal,
  TipText,
  TitleText,
  Wrapper,
  WrapperContent,
  WrapperImage,
  WrapperInfo,
  WrapperItem,
  WrapperItemChild,
  WrapperText,
} from './Assistance.style';
import { assistanceData } from '../../../../../data/AssistanceData/AssistanceData';

interface assistanceProps {
  id: number;
  imageSrc: string;
  name: string;
  job: string;
  introduce: string;
}

const AssistanceComponent: React.FC = () => {
  const [items, setItems] = useState<assistanceProps[]>([]);

  useEffect(() => {
    setItems(assistanceData);
  }, []);

  return (
    <Assistance>
      <Wrapper>
        <WrapperText>
          <TipText>Assistance Team</TipText>
          <TitleText>Meet the pro assistance</TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </DescribeText>
        </WrapperText>
        <WrapperInfo>
          <WrapperItem>
            {items.map((item) => (
              <WrapperItemChild key={item.id}>
                <WrapperImage src={item.imageSrc} />
                <WrapperContent>
                  <Personal>
                    <Name>{item.name} / </Name>
                    <Job>{item.job}</Job>
                  </Personal>
                  <Introduce>{item.introduce}</Introduce>
                </WrapperContent>
              </WrapperItemChild>
            ))}
          </WrapperItem>
        </WrapperInfo>
      </Wrapper>
    </Assistance>
  );
};

export default AssistanceComponent;
