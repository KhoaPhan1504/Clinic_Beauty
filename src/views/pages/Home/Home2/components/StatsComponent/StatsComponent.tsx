import React from 'react';
import {
  BackgroundImage,
  CardsContainer,
  ContentContainer,
  DescribeText,
  Stats,
  TextContainer,
  TitleText,
} from './Stats.style';
import StatsCard from '../../../../../../components/StatsCard/StatsCard';
import { Images } from '../../../../../../data/ComponentData/Images';
import { statImages } from '../../../../../../data/StatsData/StatsData';
const StatsComponent: React.FC = () => {
  return (
    <Stats>
      <BackgroundImage src={Images.whyChoose} alt="" />
      <ContentContainer>
        <TextContainer
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-once="true"
        >
          <TitleText className="text-white mt-px min-h-[53px]">
            Why choosing us?
          </TitleText>
          <DescribeText className="mt-[11.5px] max-w-[486px] text-[#D8DCFF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis.
          </DescribeText>
        </TextContainer>
        <CardsContainer
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-once="true"
        >
          <StatsCard
            icon={statImages.handShake}
            title="100%"
            desc="trusted clinic"
            isActive
          />
          <StatsCard
            icon={statImages.brotherhood}
            title="99%"
            desc="customer love"
            className="translate-x-[-1.5px] [&>div>span]:translate-y-[-1.3px]"
          />
          <StatsCard
            icon={statImages.earth}
            title="75"
            desc="asian branch"
            className="translate-x-[2px]"
          />
          <StatsCard
            icon={statImages.doctor}
            title="1.200+"
            desc="licensed worker"
            className="translate-x-[1.5px]"
          />
        </CardsContainer>
      </ContentContainer>
    </Stats>
  );
};

export default StatsComponent;
