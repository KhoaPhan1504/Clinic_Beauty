import React, { MutableRefObject } from 'react';
import {
  StarContainer,
  TestimonialContainer,
  TestimonialContent,
  TestimonialImage,
} from './TestimonialItem.style';
import starIcon from '../../../../../../assets/images/team/star.png';
import clsx from 'clsx';

interface TestimonialItemProps {
  image: string;
  content: string;
  star: 1 | 2 | 3 | 4 | 5;
  className: string;
  ref?: MutableRefObject<unknown>;
  width: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  image,
  content,
  star,
  className,
  width,
}) => {
  return (
    <TestimonialContainer className={clsx(className)} width={width}>
      <TestimonialImage src={image} alt="" />
      <TestimonialContent>{content}</TestimonialContent>
      <StarContainer>
        {[...Array(star)].map((_, index) => (
          <img key={index} src={starIcon} alt="" />
        ))}
      </StarContainer>
    </TestimonialContainer>
  );
};

export default TestimonialItem;
