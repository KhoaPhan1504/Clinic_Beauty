import React from 'react';
import { PostsList, RecentPostsContainer, TitleText } from './RecentPost.style';
import RecentCard from '../../../../../../../../../components/Card/RecentCard/RecentCard';

const RecentPost: React.FC = () => {
  return (
    <RecentPostsContainer>
      <TitleText>Recent Posts</TitleText>
      <PostsList>
        <RecentCard />
      </PostsList>
    </RecentPostsContainer>
  );
};

export default RecentPost;
