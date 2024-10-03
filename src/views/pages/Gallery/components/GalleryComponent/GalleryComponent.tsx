import React from 'react';
import {
  Container,
  DescribeText,
  Gallery,
  GalleryDesc,
  GalleryTitle,
  GalleryWrapperText,
  Image,
  ImageList,
  ImageWrapper,
  Strong,
  TipText,
  TitleText,
} from './Gallery.style';
import { gallery } from '../../../../../data/GalleryData/GalleryData';

const GalleryComponent: React.FC = () => {
  const images: string[][] = [
    [gallery.image1, gallery.image2, gallery.image3],
    [gallery.image4, gallery.image5, gallery.image6],
    [gallery.image7, gallery.image8, gallery.image9],
  ];

  return (
    <Gallery>
      <Container>
        <GalleryWrapperText>
          <GalleryTitle>
            <TipText>Our Gallery</TipText>
            <TitleText>
              Check out the collection pictures from our clinic
            </TitleText>
          </GalleryTitle>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </DescribeText>
        </GalleryWrapperText>
        <ImageList>
          {images[0].map((img, index) => (
            <ImageWrapper key={index}>
              <Image src={img} />
            </ImageWrapper>
          ))}
          {images[1].map((img, index) => (
            <ImageWrapper key={index} hiddenOnMobile>
              <Image src={img} />
            </ImageWrapper>
          ))}
          {images[2].map((img, index) => (
            <ImageWrapper key={index} hiddenOnTablet>
              <Image src={img} />
            </ImageWrapper>
          ))}
        </ImageList>
        <GalleryDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim, <Strong>our teams</Strong>
        </GalleryDesc>
      </Container>
    </Gallery>
  );
};

export default GalleryComponent;
