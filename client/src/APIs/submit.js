import axios from "axios";

export const apiSubmit = async (data) => {
  try {
    await axios.post("http://localhost:8007/api/submit/add", data);
  } catch (error) {
    console.log(error);
  }
};
