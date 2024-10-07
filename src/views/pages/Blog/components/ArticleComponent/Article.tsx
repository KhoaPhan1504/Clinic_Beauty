import React, { useEffect, useState } from 'react';
import { ArticleList } from './Article.style';
import { article } from '../../../../../data/BlogPage/blogData';
import BlogLargeCard from '../../../../../components/Card/BlogLargeCard/BlogLargeCard';

interface ArticleProps {
  id: number;
  imageSrc: string;
  categories: string;
  title: string;
  describe: string;
}

const Article: React.FC = () => {
  const [articles, setArticle] = useState<ArticleProps[]>([]);

  useEffect(() => {
    setArticle(article);
  }, []);

  return (
    <ArticleList>
      {articles.map((article, index) => (
        <BlogLargeCard {...article} key={index} />
      ))}
    </ArticleList>
  );
};

export default Article;
