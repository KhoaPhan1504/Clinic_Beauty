import React from 'react';
import {
  SearchButton,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './Search.style';
import { ImageBlog } from '../../../../../../../data/BlogPage/blogData';

const SearchForm: React.FC = () => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search here ..."
        aria-label="Search"
      />
      <SearchButton>
        <SearchIcon src={ImageBlog.SearchIcon} alt="Search icon" />
      </SearchButton>
    </SearchContainer>
  );
};

export default SearchForm;
