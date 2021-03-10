import { setAlert } from "./alert";

//Login Api Call
export const login = (data) => async (dispatch) => {
  dispatch(setAlert("First Alert", "success"));
};

//Contact Form
export const contactus = (data) => async (dispatch) => {
  dispatch(setAlert("Contact Form Will Work Soon", "info"));
};
