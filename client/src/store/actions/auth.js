import * as api from "../../components/api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });

    navigate("/posts");
  } catch (error) {
    const errorMesaage = error.response.data.message;
    dispatch({ type: "ERROR", data: errorMesaage });
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });

    navigate("/posts");
  } catch (error) {
    const errorMesaage = error.response.data.message;
    dispatch({ type: "ERROR", data: errorMesaage });
  }
};
