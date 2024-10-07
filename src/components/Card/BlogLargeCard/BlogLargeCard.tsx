import React from 'react';
import {
  Article,
  CardContainer,
  CategoryContainer,
  CategoryIcon,
  CategoryText,
  CustomButton,
  DescribeText,
  Figure,
  Icon,
  Image,
  TitleText,
} from './BlogLarge.style';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { ImageBlog } from '../../../data/BlogPage/blogData';

interface BlogLargeProps {
  imageSrc: string;
  categories: string;
  title: string;
  describe: string;
  className?: string;
}

const BlogLargeCard: React.FC<BlogLargeProps> = ({
  imageSrc,
  categories,
  title,
  describe,
  className,
}) => {
  return (
    <CardContainer className={className}>
      <Figure>
        <Image src={imageSrc} alt="" />
      </Figure>
      <Article>
        <CategoryContainer>
          <CategoryIcon src={ImageBlog.FolderIcon} />
          <CategoryText>{categories}</CategoryText>
        </CategoryContainer>
        <TitleText>{title}</TitleText>
        <DescribeText>{describe}</DescribeText>
        <CustomButton
          textButton="Read More"
          icon={<Icon icon={faCaretRight} />}
        />
      </Article>
    </CardContainer>
  );
};

export default BlogLargeCard;
