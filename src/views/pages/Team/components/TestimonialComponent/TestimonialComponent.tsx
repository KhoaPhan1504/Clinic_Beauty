import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Testimonial } from '../../../../../data/ComponentData/Images';
import { AppDispatch } from '../../../../../services/store';
import { RootStateType } from '../../../../../services/reducers';
import {
  next,
  prev,
  reset,
  setSlideWidth,
} from '../../../../../services/store/slide/slide.slice';
import {
  ArrowButton,
  ArrowButtonContainer,
  BackgroundImage,
  DescribeText,
  MobileArrowButton,
  MobileGroupButton,
  TestimonialList,
  TestimonialListContainer,
  TestimonialSection,
  TestimonialSlider,
  TestimonialWrapperContent,
  TipText,
  TitleText,
} from './Testimonial.style';
import Container from '../../../../../components/Container/Container';
import clsx from 'clsx';
import TestimonialItem from './components/TestimonialItem';
import { testimonialData } from '../../../../../data/Testimonial/TestimonialData';

interface TestimonialProps {
  id: number;
  image: string;
  content: string;
}

const TestimonialComponent: React.FC = () => {
  const prevBtnMobileRef = useRef<HTMLImageElement>(null);
  const nextBtnMobileRef = useRef<HTMLImageElement>(null);
  const prevBtnRef = useRef<HTMLImageElement>(null);
  const nextBtnRef = useRef<HTMLImageElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<TestimonialProps[]>([]);

  const dispatch = useDispatch<AppDispatch>();
  const { currentPage, slideWidth, slideGap, slideNumber, currentPosition } =
    useSelector((state: RootStateType) => state.slide);

  useEffect(() => {
    setItems(testimonialData);
  });

  useEffect(() => {
    const [nextBtn, prevBtn, list, prevBtnMobile, nextBtnMobile] = [
      nextBtnRef.current,
      prevBtnRef.current,
      listRef.current,
      prevBtnMobileRef.current,
      nextBtnMobileRef.current,
    ];

    const handleNext = () => {
      if (currentPage === slideNumber) return dispatch(next());
    };

    const handlePrev = () => {
      if (currentPage === 1) return dispatch(prev());
    };

    if (nextBtn && prevBtn && list && prevBtnMobile && nextBtnMobile) {
      nextBtn.onclick = handleNext;
      prevBtn.onclick = handlePrev;
      nextBtnMobile.onclick = handleNext;
      prevBtnMobile.onclick = handlePrev;
    }
  }, [currentPage, slideWidth, prevBtnRef, nextBtnRef, listRef]);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;
    if (currentPage - 1 !== slideNumber) {
      timerId = setTimeout(() => {
        dispatch(next());
      }, 6000);
    } else {
      dispatch(reset());
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [currentPage]);

  document.body.onresize = () => {
    if (document.body.clientWidth < 600) {
      dispatch(setSlideWidth(document.body.clientWidth - 40));
      dispatch(reset());
    } else if (slideWidth !== 550) {
      dispatch(setSlideWidth(550));
      dispatch(reset());
    }
  };

  return (
    <TestimonialSection>
      <BackgroundImage src={Testimonial.background} alt="" />
      <Container>
        <TestimonialWrapperContent>
          <TipText>Our Testimonials</TipText>
          <TitleText>What our customer says</TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </DescribeText>
        </TestimonialWrapperContent>
        <TestimonialSlider>
          <ArrowButtonContainer>
            <ArrowButton
              ref={prevBtnRef}
              src={Testimonial.arrowLeft}
              alt=""
              disabled={currentPage === 1}
              className={clsx(
                currentPage === 1 && 'pointer-events-none opacity-30',
              )}
            />
            <ArrowButton
              ref={nextBtnRef}
              src={Testimonial.arrowRight}
              alt=""
              disabled={currentPage === slideNumber}
              className={clsx(
                currentPage === slideNumber && 'pointer-events-none opacity-30',
              )}
            />
          </ArrowButtonContainer>
          <TestimonialListContainer>
            <TestimonialList
              ref={listRef}
              gap={slideGap}
              left={currentPosition}
            >
              {items.map((item) => (
                <TestimonialItem
                  key={item.id}
                  image={item.image}
                  content={item.content}
                  star={5}
                  className="snap-center"
                  width={`${slideWidth}px`}
                />
              ))}
            </TestimonialList>
          </TestimonialListContainer>
        </TestimonialSlider>
        <MobileGroupButton>
          <MobileArrowButton
            className="fa-angle-left"
            ref={prevBtnMobileRef}
          ></MobileArrowButton>
          <MobileArrowButton
            className="fa-angle-right"
            ref={nextBtnMobileRef}
          ></MobileArrowButton>
        </MobileGroupButton>
      </Container>
    </TestimonialSection>
  );
};

export default TestimonialComponent;
