import React, { useEffect, useState } from 'react';
import {
  Blog,
  BlogDescribe,
  BlogDescribeCard,
  BlogInfo,
  BlogItem,
  BlogItemCard,
  BlogItemChild,
  BlogLearnMore,
  BlogName,
  BlogTip,
  BlogTitle,
  BlogWrapper,
  BlogWrapperCard,
  BlogWrapperItem,
  BlogWrapperText,
  CardBlogImage,
  CardBlogImg,
} from './Blog.style';
import { blogData } from '../../../../../../data/BlogData/BlogData';
import { IconLearMore } from './Blog.style';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

interface BlogProps {
  id: number;
  blogImage: string;
  blogInfoName: string;
  blogInfoDescribe: string;
  blogLearMore: string;
}

const BlogComponent: React.FC = () => {
  const [blogs, setBlog] = useState<BlogProps[]>([]);

  useEffect(() => {
    setBlog(blogData);
  }, []);
  return (
    <Blog>
      <BlogWrapper>
        <BlogWrapperText>
          <BlogTip>The Blog</BlogTip>
          <BlogTitle>Our latest news</BlogTitle>
          <BlogDescribe>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BlogDescribe>
        </BlogWrapperText>
        <BlogWrapperCard>
          <BlogItem>
            {blogs.map((blog) => (
              <BlogItemCard key={blog.id}>
                <BlogWrapperItem>
                  <BlogItemChild>
                    <CardBlogImage>
                      <CardBlogImg
                        src={blog.blogImage}
                        alt={blog.blogInfoName}
                      />
                    </CardBlogImage>
                    <BlogInfo>
                      <BlogName>{blog.blogInfoName}</BlogName>
                      <BlogDescribeCard>
                        {blog.blogInfoDescribe}
                      </BlogDescribeCard>
                    </BlogInfo>
                    <BlogLearnMore>
                      {blog.blogLearMore}
                      <IconLearMore icon={faAngleDoubleRight} />
                    </BlogLearnMore>
                  </BlogItemChild>
                </BlogWrapperItem>
              </BlogItemCard>
            ))}
          </BlogItem>
        </BlogWrapperCard>
      </BlogWrapper>
    </Blog>
  );
};

export default BlogComponent;
