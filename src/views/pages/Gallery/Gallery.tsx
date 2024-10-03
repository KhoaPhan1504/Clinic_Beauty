import React from 'react';
import Layout1Component from '../../layouts/components/Layout1Component/Layout1Component';
import GalleryComponent from './components/GalleryComponent/GalleryComponent';
import VideoComponent from './components/VideoComponent/VideoComponent';
import QuotaComponent from './components/QuotaComponent/QuotaComponent';

const Gallery: React.FC = () => {
  return (
    <Layout1Component>
      <GalleryComponent />
      <VideoComponent />
      <QuotaComponent />
    </Layout1Component>
  );
};

export default Gallery;
