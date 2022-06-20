import actionTypes from "./actionTypes";
import {
  getAllCodeService,
  createNewUserService,
  getAllUsers,
  deleteUserService,
  editUserService,
  getTopDoctorHomeService,
  getAllDoctors,
  saveDetailDoctorService,
} from "../../services/userService";
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

// Fetch gender
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAllCodeService("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFail());
      }
    } catch (e) {
      dispatch(fetchGenderFail());
      console.log("fetchGenderStart error", e);
    }
  };
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
});

// Fetch position
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("POSITION");
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFail());
      }
    } catch (e) {
      dispatch(fetchPositionFail());
      console.log("fetchPositionStart error", e);
    }
  };
};

export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
});

// Fetch Role

export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService("ROLE");
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFail());
      }
    } catch (e) {
      dispatch(fetchRoleFail());
      console.log("fetchRoleStart error", e);
    }
  };
};

export const fetchRoleSuccess = (RoleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: RoleData,
});

export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLE_FAIL,
});

// Create new user
export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Create a new user succeed!");
        dispatch(createUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(createUserFail());
        alert(res.errMessage);
      }
    } catch (e) {
      dispatch(createUserFail());
      console.log("fetchRoleStart error", e);
    }
  };
};

export const createUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
});

export const createUserFail = () => ({
  type: actionTypes.CREATE_USER_FAIL,
});

// Fetch all user
export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("All");
      if (res && res.errCode === 0) {
        dispatch(fetchAllUserSuccess(res.users.reverse()));
      } else {
        toast.error("Fetch all user error!");
        dispatch(fetchAllUserFail());
      }
    } catch (e) {
      toast.error("Fetch all user error!");
      dispatch(fetchAllUserFail());
      console.log("fetchAllUserStart error", e);
    }
  };
};

export const fetchAllUserSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  users: data,
});

export const fetchAllUserFail = () => ({
  type: actionTypes.FETCH_ALL_USERS_FAIL,
});

// delete user

export const deleteAUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("Delete the user succeed!");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("Delete the user error!");
        dispatch(deleteUserFail());
        alert(res.errMessage);
      }
    } catch (e) {
      dispatch(deleteUserFail());
      console.log("deleteUserFail error", e);
    }
  };
};

export const deleteUserSuccess = (data) => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  users: data,
});

export const deleteUserFail = () => ({
  type: actionTypes.DELETE_USER_FAIL,
});

// edit user
export const editAUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await editUserService(data);
      if (res && res.errCode === 0) {
        toast.success("Update the user succeed!");
        dispatch(editUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error("Update the user error!");
        dispatch(editUserFail());
        alert(res.errMessage);
      }
    } catch (e) {
      dispatch(editUserFail());
      console.log("editUserFail error", e);
    }
  };
};

export const editUserSuccess = () => ({
  type: actionTypes.EDIT_USER_SUCCESS,
});

export const editUserFail = () => ({
  type: actionTypes.EDIT_USER_FAIL,
});

// fetch top doctors
export const fetchTopDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getTopDoctorHomeService("");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
          dataTopDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_TOP_DOCTORS_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_TOP_DOCTORS_FAIL:", e);
      dispatch({
        type: actionTypes.FETCH_TOP_DOCTORS_FAIL,
      });
    }
  };
};

// fetch all doctors

export const fetchAllDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctors();
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
          dataDoctors: res.data,
        });
      } else {
        dispatch({
          type: actionTypes.FETCH_ALL_DOCTORS_FAIL,
        });
      }
    } catch (e) {
      console.log("FETCH_ALL_DOCTORS_FAIL:", e);
      dispatch({
        type: actionTypes.FETCH_ALL_DOCTORS_FAIL,
      });
    }
  };
};

// save a detail doctors

export const saveDetailDoctor = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveDetailDoctorService(data);
      if (res && res.errCode === 0) {
        toast.success("Save infor detail doctor succeed!");
        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
        });
      } else {
        toast.error("Save infor detail doctor error!");

        dispatch({
          type: actionTypes.SAVE_DETAIL_DOCTOR_FAIL,
        });
      }
    } catch (e) {
      toast.error("Save infor detail doctor error!");
      console.log("SAVE_DETAIL_DOCTOR_FAIL:", e);
      dispatch({
        type: actionTypes.SAVE_DETAIL_DOCTOR_FAIL,
      });
    }
  };
};
