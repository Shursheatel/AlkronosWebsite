export enum SpecialOffersSliderActionTypes {
  SET_SLIDES = 'SET_SLIDES',
  FETCH_SLIDES = 'FETCH_SLIDES',
  FETCH_SLIDES_REQUEST = 'FETCH_SLIDES_REQUEST',
  FETCH_SLIDES_SUCCESS = 'FETCH_SLIDES_SUCCESS',
  FETCH_SLIDES_FAILURE = 'FETCH_SLIDES_FAILURE',
  NEXT_SLIDE = 'NEXT_SLIDE',
  PREVIOUS_SLIDE = 'PREVIOUS_SLIDE',
}

export type FetchSlidesAction = {
  type: SpecialOffersSliderActionTypes.FETCH_SLIDES,
  payload: Slide[];
};

export type FetchSlidesRequestAction = {
  type: SpecialOffersSliderActionTypes.FETCH_SLIDES_REQUEST,
};

export type FetchSlidesSuccessAction = {
  type: SpecialOffersSliderActionTypes.FETCH_SLIDES_SUCCESS,
  payload: Slide[];
};

export type FetchSlidesFailureAction = {
  type: SpecialOffersSliderActionTypes.FETCH_SLIDES_FAILURE,
  payload: string;
};

export type NextSlideAction = {
  type: SpecialOffersSliderActionTypes.NEXT_SLIDE,
};
  
export type PreviousSlideAction = {
  type: SpecialOffersSliderActionTypes.PREVIOUS_SLIDE,
};
  
export type SpecialOffersSliderAction = FetchSlidesAction | FetchSlidesRequestAction | FetchSlidesSuccessAction | FetchSlidesFailureAction | NextSlideAction | PreviousSlideAction;
  
export type Slide = {
  title: string;
  type: string;
  body: string;
  imgURL: string;
};
  
export type SpecialOffersSliderProps = {
  slides: Slide[];
};
  
export type SpecialOffersSliderState = {
  currentSlideIndex: number;
  slides: Slide[];
  loading: boolean;
  error: string | null;
};