import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SpecialOffersSliderAction,
  SpecialOffersSliderState,
} from '../types/SpecialOffersSliderTypes';
import { AppDispatch, RootState } from '../types/StoreTypes';
import '../styles/Slider.css';
import { fetchSlides, nextSlide, previousSlide} from '../actions/SliderActions';

import leftArrow from '../img/icons/left_arrow.svg';
import rightArrow from '../img/icons/right_arrow.svg';

const SpecialOffersSlider = () => {

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  const { slides, currentSlideIndex } = useSelector<RootState, SpecialOffersSliderState>(
    (state) => state.specialOffersSlider
  );

  const onNextSlide = useCallback(() => {
    dispatch<SpecialOffersSliderAction>(nextSlide());
  }, [dispatch]);

  const onPreviousSlide = useCallback(() => {
    dispatch<SpecialOffersSliderAction>(previousSlide());
  }, [dispatch]);

  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      onNextSlide();
    }, 4000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentSlideIndex, onNextSlide]);

  return (
    <div className='slider'>
      <img src={leftArrow} alt='Left Arrow' className='sliderArrow sliderLeftArrow' onClick={onPreviousSlide} />
      <img src={rightArrow} alt='right Arrow' className='sliderArrow sliderRightArrow' onClick={onNextSlide} />
      <div className='slides-container'>
        <div className='slides' style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}>
            {slides.map((slide) => (
              <div className='slide'> 
                <div className='text-block'>
                  <h2>{`${slide.type}`}</h2>
                  <h1>{`${slide.title}`}</h1>
                  <p>{`${slide.body}`}</p>         
                </div>
                <img
                  src={`${slide.imgURL}`}
                  alt={`${slide.imgURL}`}
                  className='slide-image'
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersSlider;