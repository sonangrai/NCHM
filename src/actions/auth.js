import { setAlert } from "./alert";

//Login Api Call
export const login = (data) => async (dispatch) => {
  console.log(data);
  dispatch(setAlert("First Alert", "success"));
};
