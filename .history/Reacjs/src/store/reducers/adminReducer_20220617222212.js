import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      let copyState = { ...state };
      copyState.isLoadingGender = true;
      console.log("fetch gender start:", action);
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      console.log("fetch gender succees:", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      console.log("fetch gender fail:", action);
      state.isLoadingGender = false;
      state.genders = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
