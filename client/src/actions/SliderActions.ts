import { 
  Slide, 
  SpecialOffersSliderActionTypes, 
  NextSlideAction, 
  PreviousSlideAction, 
  FetchSlidesRequestAction,
  FetchSlidesSuccessAction,
  FetchSlidesFailureAction
} from "../types/SpecialOffersSliderTypes";

import { AppThunk } from '../types/StoreTypes'

export const fetchSlides = (): AppThunk => async (dispatch) => {
  dispatch(fetchSlidesRequest());
  try {
    const response = await fetch('http://127.0.0.1:25600/api/special-offers/offers');
    const slides: Slide[] = await response.json();
    dispatch(fetchSlidesSuccess(slides));
  } catch (error) {
    const errorMessage: string = error as string;
    dispatch(fetchSlidesFailure(errorMessage));
  }
};

export const fetchSlidesRequest = (): FetchSlidesRequestAction => ({
  type: SpecialOffersSliderActionTypes.FETCH_SLIDES_REQUEST,
});

export const fetchSlidesSuccess = (slides: Slide[]): FetchSlidesSuccessAction => ({
  type: SpecialOffersSliderActionTypes.FETCH_SLIDES_SUCCESS,
  payload: slides,
});

export const fetchSlidesFailure = (error: string): FetchSlidesFailureAction => ({
  type: SpecialOffersSliderActionTypes.FETCH_SLIDES_FAILURE,
  payload: error,
});

export const nextSlide = (): NextSlideAction => {
  return {
    type: SpecialOffersSliderActionTypes.NEXT_SLIDE,
  };
};

export const previousSlide = (): PreviousSlideAction => {
  return {
    type: SpecialOffersSliderActionTypes.PREVIOUS_SLIDE,
  };
};  