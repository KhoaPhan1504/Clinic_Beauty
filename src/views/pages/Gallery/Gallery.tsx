import React from 'react';
import GalleryComponent from './components/GalleryComponent/GalleryComponent';
import VideoComponent from './components/VideoComponent/VideoComponent';
import QuotaComponent from './components/QuotaComponent/QuotaComponent';
import Layout1Component from '../../layouts/Layout1Component';

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
