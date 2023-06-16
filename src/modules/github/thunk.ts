import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getUserProfileAsync } from "./actions";
import { getUserProfile } from "../../api/github";
import { GithubAction } from "./types";
import axios from "axios";

export const getUserProfileThunk = (
  username: string
): ThunkAction<void, RootState, null, GithubAction> => {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      if (axios.isAxiosError(e)) {
        dispatch(failure(e));
      }
    }
  };
};
