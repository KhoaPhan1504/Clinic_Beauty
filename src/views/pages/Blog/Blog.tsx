import React from 'react';
import Layout1Component from '../../layouts/Layout1Component';
import TitleComponent from './components/Titlecomponent/TitleComponent';
import Container from '../../../components/Container/Container';
import { ContentContainer, ItemContent } from './Blog.style';
import Article from './components/ArticleComponent/Article';
import Search from './components/SearchComponent/Search';
import Pagination from './components/PaginationComponent/Pagination';

const Blog: React.FC = () => {
  return (
    <Layout1Component>
      <TitleComponent />
      <ContentContainer>
        <Container>
          <ItemContent>
            <Article />
            <Search />
          </ItemContent>
          <Pagination />
        </Container>
      </ContentContainer>
    </Layout1Component>
  );
};

export default Blog;
