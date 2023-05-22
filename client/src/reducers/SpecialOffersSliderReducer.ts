import { 
  SpecialOffersSliderState, 
  SpecialOffersSliderAction, 
  SpecialOffersSliderActionTypes 
} from '../types/SpecialOffersSliderTypes'
  
const initialState: SpecialOffersSliderState = {
  currentSlideIndex: 0,
  slides: [],
  loading: false,
  error: null,
};
  
export const specialOffersSliderReducer = (
  state = initialState,
  action: SpecialOffersSliderAction ): SpecialOffersSliderState => {
    switch (action.type) {

      case SpecialOffersSliderActionTypes.FETCH_SLIDES_REQUEST:
        return {
          ...state, loading: true, error: null
        };

      case SpecialOffersSliderActionTypes.FETCH_SLIDES_SUCCESS:
        return {
          ...state, slides: action.payload, loading: false
        };  

      case SpecialOffersSliderActionTypes.FETCH_SLIDES_FAILURE:
        return {
          ...state, loading: false, error: action.payload
        };

      case SpecialOffersSliderActionTypes.NEXT_SLIDE:
        return {
          ...state,
          currentSlideIndex: (state.currentSlideIndex + 1) % state.slides.length,
        };

      case SpecialOffersSliderActionTypes.PREVIOUS_SLIDE:
        return {
          ...state,
          currentSlideIndex: (state.currentSlideIndex - 1 + state.slides.length) % state.slides.length,
        };
        
      default:
        return state;
  };
};

