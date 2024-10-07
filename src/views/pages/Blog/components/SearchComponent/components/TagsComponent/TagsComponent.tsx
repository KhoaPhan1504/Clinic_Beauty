import Categories from './components/CategoriesComponent/Categories';
import CloudTags from './components/CloudTagComponent/CloudTags';
import RecentPost from './components/RecentPostComponent/RecentPost';
import Socials from './components/SocialsComponent/SocialsComponent';

const TagsComponent = () => {
  return (
    <>
      <RecentPost />
      <Categories />
      <CloudTags />
      <Socials />
    </>
  );
};

export default TagsComponent;
