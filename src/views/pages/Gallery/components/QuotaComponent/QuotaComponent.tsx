import React from 'react';
import {
  DescribeText,
  Quota,
  QuotaBtn,
  QuotaWrapper,
  QuotaWrapperButton,
  QuotaWrapperText,
  TipText,
  TitleText,
} from './Quota.style';

const QuotaComponent: React.FC = () => {
  return (
    <Quota>
      <QuotaWrapper>
        <QuotaWrapperText>
          <TipText>Get The Quota</TipText>
          <TitleText>
            Want to be handled by our professional team immediately?
          </TitleText>
          <DescribeText>
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim.
          </DescribeText>
        </QuotaWrapperText>
        <QuotaWrapperButton>
          <QuotaBtn textButton="Make an Appointment" />
        </QuotaWrapperButton>
      </QuotaWrapper>
    </Quota>
  );
};

export default QuotaComponent;
