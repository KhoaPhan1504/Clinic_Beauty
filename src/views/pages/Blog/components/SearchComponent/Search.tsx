import React from 'react';
import SearchForm from './components/SearchFormComponent/SearchForm';
import TagsComponent from './components/TagsComponent/TagsComponent';
import { SearchTags } from './Search.style';

const Search: React.FC = () => {
  return (
    <SearchTags>
      <SearchForm />
      <TagsComponent />
    </SearchTags>
  );
};

export default Search;
