import actionTypes from "./actionTypes";
import { getAllCodeService } from "../../services/userService";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => ({
  type: actionTypes.FETCH_GENDER_START,
});

export const fetchGenderSuccess = () => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
});

export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});

// start doing end
