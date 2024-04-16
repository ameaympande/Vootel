import axios from "axios";

export const LoginAPI = async ({ email, password }) => {
  const apiUrl = "https://vootel.onrender.com/login";
  const body = {
    email,
    password,
  };

  try {
    const response = await axios.post(apiUrl, body);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.data.error || "Unexpected error occurred");
    }
  } catch (error) {
    console.error("Error while signing up:", error.response);
    return error.response || "Unexpected error occurred";
  }
};
