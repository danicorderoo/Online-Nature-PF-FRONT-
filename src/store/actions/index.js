import axios from "axios";
import { useSelector } from "react-redux";

export const  getAnimals = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/animals");
      console.log(response.data);
      dispatch({
        type: "GET_ANIMALS",
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const getTrees = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/trees");
      console.log(response.data);
      dispatch({
        type: "GET_TREES",
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const setOpenModal = (isOpen) => {
  console.log("🚀 ~ file: index.js:41 ~ setOpenModal ~ isOpen", isOpen)
  const setIsOpen = !isOpen
  console.log("🚀 ~ file: index.js:43 ~ setOpenModal ~ isOpen", isOpen, setIsOpen)
  return async function (dispatch) {
    dispatch({
      type: "MODAL_GATE",
      payload: setIsOpen
    })
  };

};

  