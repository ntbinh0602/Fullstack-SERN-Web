import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  position: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("fetch gender start:", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyState = { ...this.state };
      console.log("fetch gender start:", action);
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      console.log("fetch gender start:", action);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
