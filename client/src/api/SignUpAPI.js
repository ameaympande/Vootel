import axios from "axios";

export const signUp = async ({ email, password }) => {
  const apiUrl = "https://vootel.onrender.com" + "/signup";
  const body = {
    email,
    password,
  };

  try {
    const response = await axios.post(apiUrl, body);
    return response.data;
  } catch (error) {
    console.log("Error while signing up:", error);
    throw error;
  }
};
