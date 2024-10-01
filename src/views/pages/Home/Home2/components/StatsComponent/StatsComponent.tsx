import React, { useEffect, useState } from 'react';
import {
  ContentDescribe,
  ContentIcon,
  ContentTitle,
  CountIcon,
  DescribeIcon,
  GroupIcon,
  ImageIcon,
  WhyChoose,
  WhyChooseWrapper,
  WrapperContainer,
  WrapperContent,
  WrapperIcon,
} from './Stats.style';
import { statsData } from '../../../../../../data/StatsData/StatsData';

interface StatsProps {
  id: number;
  imageIcon: string;
  count: string;
  nameIcon: string;
}

const StatsComponent: React.FC = () => {
  const [stats, setStats] = useState<StatsProps[]>([]);

  useEffect(() => {
    setStats(statsData);
  }, []);

  return (
    <WhyChoose>
      <WhyChooseWrapper>
        <WrapperContent>
          <ContentTitle>Why choosing us?</ContentTitle>
          <ContentDescribe>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis.
          </ContentDescribe>
        </WrapperContent>
        <WrapperIcon>
          <WrapperContainer>
            {stats.map((stats) => (
              <GroupIcon key={stats.id}>
                <ImageIcon src={stats.imageIcon} />
                <ContentIcon>
                  <CountIcon>{stats.count}</CountIcon>
                  <DescribeIcon>{stats.nameIcon}</DescribeIcon>
                </ContentIcon>
              </GroupIcon>
            ))}
          </WrapperContainer>
        </WrapperIcon>
      </WhyChooseWrapper>
    </WhyChoose>
  );
};

export default StatsComponent;
